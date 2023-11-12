export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'leftnav.about': 'ABOUT',
    'rightnav.lang': 'FRANÇAIS',
    /* 
    The useTranslations helper will return the default language’s value 
    if a key is not translated. In this example, 
    French users will also see "Instagram" in the nav bar.
    */
    'rightnav.instagram': 'Instagram', // proper nouns not translated
  },
  fr: {
    'leftnav.about': 'À PROPOS',
    'rightnav.lang': 'ENGLISH'
  },
} as const;