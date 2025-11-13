'use client';

import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    router.push('/contact');
  };

  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToSermons = () => {
    router.push('/sermons');
  };

  const openWhatsApp = () => {
    // Контактний номер церкви (замінити на актуальний)
    const phoneNumber = '+380633444555';
    const message = encodeURIComponent('Привіт! Хочу дізнатися більше про церкву "Скинія Любові та Істини" та служіння.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    // Адреса церкви - змініть на актуальну повну адресу
    const address = encodeURIComponent('вул. Уласа Самчука, 14, м. Рівне, Рівненська область, Україна');
    window.open(`https://www.google.com/maps/search/${address}`, '_blank');
  };

  const joinService = () => {
    // Можна додати модальне вікно з інформацією про час і місце служіння
    // Або перенаправити на сторінку контактів
    scrollToSection('service-schedule');
    setTimeout(() => {
      navigateToContact();
    }, 1000);
  };

  const learnMore = () => {
    navigateToAbout();
  };

  const visitService = () => {
    // Показати інформацію про розклад і контакти
    openGoogleMaps();
  };

  const contactUs = () => {
    navigateToContact();
  };

  const learnSchedule = () => {
    scrollToSection('service-schedule');
  };

  return {
    scrollToSection,
    navigateToContact,
    navigateToAbout,
    navigateToSermons,
    openWhatsApp,
    openGoogleMaps,
    joinService,
    learnMore,
    visitService,
    contactUs,
    learnSchedule
  };
};