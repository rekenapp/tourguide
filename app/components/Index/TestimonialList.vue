<script setup lang="ts">
const { data: testimonials } = await useAsyncData('testimonials', () =>
    queryCollection('testimonials').all()
)
</script>

<template>
    <UContainer as="section" class="py-10 lg:py-14 space-y-8 max-w-full">
        <Heading :title="$t('Cerita Mereka')" :description="$t('Dengarkan cerita mereka tentang pengalaman seru bersama kita.')" class="text-center" />
        <div class="relative">
            <Marquee class="[--duration:60s]!">
                <div class="flex gap-6">
                    <UCard v-for="(testimonial, index) in testimonials" :key="index" class="max-w-xs bg-muted/50" variant="soft">
                        <div class="flex mb-3">
                            <UIcon name="i-lucide-star" v-for="n in testimonial.star" :key="n" class="text-warning" />
                        </div>
                        <p class="mb-4 line-clamp-4">
                            <em>"{{ testimonial.content }}"</em>
                        </p>
                        <UButton :to="testimonial.link" external target="_blank" :avatar="{ src: testimonial.avatar, alt: testimonial.reviewer, icon: 'i-lucide-user', class: 'size-8 dark:bg-accented', size: 'xl' }" variant="link" class="text-start p-0!" color="neutral">
                            <div>
                                <h4 class="font-semibold">{{ testimonial.reviewer }}</h4>
                                <p class="text-sm text-dimmed">@{{ testimonial.username }}</p>
                            </div>
                        </UButton>
                    </UCard>
                </div>
            </Marquee>
            <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-default"></div>
            <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-default"></div>
        </div>
    </UContainer>
</template>