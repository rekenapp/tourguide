<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui';

const config = useRuntimeConfig()

const state = reactive({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
})

const text = computed(() => {
    if (state.firstName && state.lastName && state.email && state.message) {
        return `Halo, nama saya ${state.firstName} ${state.lastName}, email ${state.email}, pesan: ${state.message}`;
    }
    return 'Form belum lengkap, isi dulu ya!';
})

async function submit(event: FormSubmitEvent<typeof state>) {
    await navigateTo(`https://wa.me/6281234567890?text=${encodeURIComponent(text.value)}`, {
        external: true,
        open: {
            target: '_blank'
        }
    });
}

const actions = [
    { icon: 'i-lucide-info', label: $t('Tentang Kita'), to: '/about', description: $t('Pelajari lebih lanjut tentang perusahaan kita dan layanan yang kita tawarkan.'), cta: $t('Baca Lebih Lanjut') },
    { icon: 'i-lucide-help-circle', label: $t('FAQ Kita'), to: '/faqs', description: $t('Cari jawaban di FAQ kita untuk apa saja yang mungkin kamu ingin tanyakan.'), cta: $t('Jelajahi FAQ') },
    { icon: 'i-lucide-mail', label: $t('Email Kita'), href: `mailto:${config.public.owner.email}`, external: true, description: $t('Jika kamu ingin mengirim email, gunakan alamat email ini.'), cta: config.public.owner.email },
]
</script>

<template>
    <UContainer class="py-10 lg:py-14 max-w-5xl space-y-8">
        <Heading :title="$t('Hubungi Kita')" :description="$t('Hubungi kita untuk pertanyaan apa saja atau dukungan yang kamu butuhkan.')" class="text-center" />
        <div class="grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <UCard>
                <h2 class="mb-8 font-semibold">{{ $t('Isi Formulir Ini') }}</h2>
                <UForm :state="state" class="space-y-4" @submit="submit">
                    <div class="grid gap-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <UFormField name="firstName" size="lg" required>
                                <UInput v-model="state.firstName" type="text" :placeholder="$t('Nama Depan')" required />
                            </UFormField>
                            <UFormField name="lastName" size="lg">
                                <UInput v-model="state.lastName" type="text" :placeholder="$t('Nama Belakang')" />
                            </UFormField>
                        </div>
                        <UFormField name="email" size="lg">
                            <UInput v-model="state.email" type="email" :placeholder="$t('Alamat Email Kamu')" />
                        </UFormField>
                        <UFormField name="message" size="lg" required>
                            <UTextarea v-model="state.message" :placeholder="$t('Detail Cerita Kamu')" required />
                        </UFormField>
                    </div>
                    <UButton type="submit" block size="lg" :label="$t('Kirim Pertanyaan')" />
                    <p class="mt-3 text-center text-sm text-dimmed">{{ $t('Kita akan balas dalam 1-2 hari kerja.') }}</p>
                </UForm>
            </UCard>

            <div class="divide-y divide-gray-200 dark:divide-neutral-800">
                <div v-for="(action, index) in actions" :key="index" class="flex gap-x-7 py-6">
                    <UIcon :name="action.icon" class="size-6" />
                    <div class="grow space-y-3">
                        <div>
                            <h3 class="font-semibold">{{ action.label }}</h3>
                            <p class="mt-1 text-sm text-muted">{{ action.description }}</p>
                        </div>
                        <UButton variant="link" class="p-0" :label="action.cta" :trailing-icon="!action.external ? 'i-lucide-arrow-right' : undefined" :to="action.to" :href="action.href" external />
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>