'use client';

import { useEffect } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
}

export function ImageModal({ isOpen, onClose, imageUrl }: ImageModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        >
            <div className="absolute top-6 right-6 z-[110]">
                <button
                    onClick={onClose}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div
                className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt="Full screen view"
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                />
            </div>
        </div>
    );
}
