import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        posts_id: defineCollection({
            type: 'page',
            source: {
                include: 'id/**/*.md',
                prefix: '',
            },
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                author: z.string(),
                image: z.string().optional()
            })
        }),
        posts_en: defineCollection({
            type: 'page',
            source: {
                include: 'en/**/*.md',
                prefix: '',
            },
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                author: z.string(),
                image: z.string().optional()
            })
        }),
        testimonials: defineCollection({
            type: 'data',
            source: 'testimonials/**/*.json',
            schema: z.object({
                star: z.number(),
                content: z.string(),
                reviewer: z.string(),
                avatar: z.string(),
                username: z.string(),
                link: z.string()
            })
        })
    }
})
