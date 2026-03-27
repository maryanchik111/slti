'use client';

import { useParams, useRouter } from 'next/navigation';
import { events } from '@/data';
import { listFolderItems, getPhotoUrl } from '@/lib/firebase';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';
import Link from 'next/link';
import { ImageModal } from '@/components/ImageModal';

export default function EventDetailPage() {
    const { id } = useParams();
    const { language, t } = useLanguage();
    const { contactUs } = useNavigation();
    const router = useRouter();
    const [dynamicPhotos, setDynamicPhotos] = useState<string[]>([]);
    const [loadingPhotos, setLoadingPhotos] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const event = events.find((e) => e.id === id);

    useEffect(() => {
        if (event?.id === '2nd-birthday' || event?.category === 'baptizing' || event?.category === 'baby-shower' || event?.category === 'thanksgiving') {
            setLoadingPhotos(true);
            const folder = event.id === '2nd-birthday' ? 'birthday' :
                event.category === 'baptizing' ? 'Baptizing' :
                    event.category === 'baby-shower' ? 'BabyShower' : 'ThanksGivingDay';
            setDynamicPhotos([]); // Clear any existing photos

            listFolderItems(folder)
                .then(async (items) => {
                    // Fetch and add photos one by one for better perceived speed
                    for (const item of items) {
                        try {
                            const url = await getPhotoUrl(item);
                            setDynamicPhotos((prev) => [...prev, url]);
                        } catch (err) {
                            console.error("Error loading photo:", err);
                        }
                    }
                })
                .finally(() => {
                    setLoadingPhotos(false);
                });
        }
    }, [event]);

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">Подію не знайдено / Event not found</p>
                    <Link
                        href="/events"
                        className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-colors"
                    >
                        {t('backToEvents')}
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const locale = language === 'en' ? 'en-US' : 'uk-UA';
        return date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors group"
                >
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t('backToEvents')}
                </button>

                {/* Header Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                    <div className="relative h-[400px] md:h-[500px]">
                        {event.image ? (
                            <img
                                src={event.image}
                                alt={language === 'en' ? event.titleEn || event.title : event.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-amber-100 via-stone-100 to-amber-200 flex items-center justify-center">
                                <svg className="w-32 h-32 text-amber-700/30" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" />
                                </svg>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                            <div className="inline-block px-4 py-1 rounded-full bg-amber-500 text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
                                {event.category === 'holiday' ? t('holidayEvents') : t('events')}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
                                {language === 'en' ? event.titleEn || event.title : event.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-amber-100 font-medium">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    {formatDate(event.date)}
                                </div>
                                {event.location && (
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {language === 'en' ? event.locationEn || event.location : event.location}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p className="whitespace-pre-wrap">
                                {language === 'en' ? event.contentEn || event.content || event.descriptionEn || event.description : event.content || event.description}
                            </p>
                        </div>

                        {/* Gallery Section */}
                        {(dynamicPhotos.length > 0 || (event.photos && event.photos.length > 0)) && (
                            <div className="mt-16">
                                <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                                    <span className="w-10 h-1 bg-amber-500 mr-4"></span>
                                    {t('eventGallery')}
                                    {loadingPhotos && <span className="ml-4 text-sm font-normal text-gray-500 animate-pulse">Завантаження...</span>}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {(dynamicPhotos.length > 0 ? dynamicPhotos : event.photos || []).map((photo, index) => (
                                        <div
                                            key={index}
                                            className="relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                                            onClick={() => setSelectedImage(photo)}
                                        >
                                            <img
                                                src={photo}
                                                alt={`${event.title} - photo ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <ImageModal
                            isOpen={!!selectedImage}
                            onClose={() => setSelectedImage(null)}
                            imageUrl={selectedImage || ''}
                        />

                        {/* CTA Section */}
                        <div className="mt-16 p-8 bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl text-center border border-amber-100/50">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('joinFamily')}</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                {t('joinFamilyText')}
                            </p>
                            <button
                                onClick={contactUs}
                                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {t('contactUs')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
