<script lang="ts" setup>
const isDark = computed(() => useColorMode().value == "dark");
</script>

<template>
    <div class="relative">
        <ParticleBackground class="absolute h-screen w-full -z-1" :quantity="100" :ease="100" :color="isDark ? '#FEB233' : '#FEB233'" :staticity="10" refresh />
        <IndexHero />
        <IndexStatistics />
        <IndexBlogList />
        <IndexTestimonialList />
        <IndexFeature />
        <IndexContact />
    </div>
</template>
