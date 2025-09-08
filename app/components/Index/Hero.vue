<template>
    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2">
        <UContainer class="pt-24 pb-16">
            <div class="flex justify-center">
                <UBadge icon="i-lucide-rocket" :label="$t('Selamat Datang di TripJavaBali')" color="neutral" size="lg" class="rounded-full py-2 px-3.5" variant="subtle" />
            </div>

            <div class="mt-5 text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                    <span class="bg-clip-text bg-linear-to-tl from-primary-300 dark:from-primary-100 to-primary text-transparent">
                        {{ $t('Yuk Jelajahi Indonesia Bersama Pandu Wisata Lokal Kita') }}
                    </span>
                </h1>
            </div>

            <div class="mt-5 max-w-4xl text-center mx-auto">
                <p class="text-lg text-gray-600 dark:text-neutral-400">{{ $t('TripJavaBali menghadirkan tur pribadi yang aman dan penuh kenangan indah di Jawa dan Bali — disesuaikan sepenuhnya dengan apa yang ingin kamu lihat, rasakan, dan alami bersama.') }}</p>
            </div>

            <div class="mt-8 gap-3 flex justify-center">
                <UButton :label="$t('Pesan Tur Sekarang')" size="xl" class="rounded-full" icon="i-lucide-phone" />
                <UButton :label="$t('Kenalan Dulu Yuk')" color="neutral" size="xl" class="rounded-full" variant="ghost" trailing-icon="i-lucide-arrow-right" @click="$router.push('/about')" />
            </div>
        </UContainer>
    </div>
</template>