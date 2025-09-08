// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  runtimeConfig: {
    public: {
      owner: {
        name: 'Tony Aditama',
        email: 'tonyaditama@gmail.com',
        phone: '6281312907698',
        socials: [
          { icon: 'i-lucide-instagram', href: 'https://www.instagram.com/tony_aditama?utm_source=qr&igsh=MTY1czdjcGFkM29oYw==' },
          { icon: 'i-lucide-phone', href: 'https://wa.me/6281312907698' },
          { icon: 'i-lucide-facebook', href: 'https://www.facebook.com/share/19AAq1rGEZ/' },
        ] as { icon: string; href: string }[],
        company: 'TripJavaBali',
      }
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  app: {
    layoutTransition: { name: 'fade', mode: 'out-in' },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  i18n: {
    locales: [
      { code: 'id', name: 'Indonesia', language: 'id-ID', file: 'id.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
    ],
    skipSettingLocaleOnNavigate: true,
    defaultLocale: 'id',
  },

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }]
  },

  seo: {
    meta: {
      description: 'Uncover the heart of Indonesia with tailored tours, local insights, and unforgettable experiences',
      themeColor: [
        { content: '#FEB233', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      author: 'Rasyidly',
      colorScheme: 'dark light',
      applicationName: 'Trip Java Bali',
      ogSiteName: 'Explore Java & Bali | Your Personal Guide',
      ogLocale: 'en_US',
      ogType: 'website',
      ogUrl: 'https://tripjavabali.com',
      ogTitle: 'Explore Java & Bali | Your Personal Guide',
      ogImage: '/og_image.png',
      robots: 'index, follow',
    }
  },
})
