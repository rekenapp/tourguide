<script lang="ts" setup>
const faqs = [
    { question: "Apa saja destinasi utama dalam paket Trip Java Bali?", answer: "Paket Trip Java Bali mencakup destinasi utama seperti Yogyakarta dengan Candi Borobudur dan Prambanan, Solo dengan Keraton Kasunanan, Jakarta dengan berbagai wisata kuliner dan budaya, serta Bali dengan Ubud, Kuta, Sanur, dan Nusa Penida." },
    { question: "Berapa lama durasi Trip Java Bali yang ideal?", answer: "Durasi ideal untuk Trip Java Bali adalah 10-14 hari. Ini memberikan waktu yang cukup untuk mengeksplorasi kebudayaan Jawa di Yogyakarta dan Solo (4-5 hari), menikmati Jakarta (2-3 hari), dan bersantai di Bali (5-6 hari) tanpa terburu-buru." },
    { question: "Kapan waktu terbaik untuk Trip Java Bali?", answer: "Waktu terbaik adalah April-Oktober saat musim kemarau. Cuaca cerah cocok untuk wisata outdoor dan pantai. Hindari Desember-Maret karena musim hujan, kecuali Anda tidak keberatan dengan hujan sesekali dan ingin menghindari keramaian turis." },
    { question: "Bagaimana transportasi antar kota dalam Trip Java Bali?", answer: "Transportasi antar kota bisa menggunakan pesawat untuk Jakarta-Yogyakarta-Bali (tercepat), kereta api untuk rute Jawa yang nyaman, atau bus/travel untuk budget lebih hemat. Kami juga menyediakan paket transportasi lengkap sesuai preferensi Anda." },
    { question: "Apa saja kuliner khas yang wajib dicoba?", answer: "Di Jawa: Gudeg Yogya, Nasi Liwet Solo, Kerak Telor Jakarta, Soto Betawi. Di Bali: Bebek Betutu, Ayam Pelalah, Sate Lilit, Nasi Jinggo, dan berbagai seafood segar. Kami akan memandu Anda ke tempat makan terbaik di setiap destinasi." },
    { question: "Apakah Trip Java Bali cocok untuk keluarga dengan anak-anak?", answer: "Sangat cocok! Banyak destinasi family-friendly seperti Taman Sari Yogya, Museum Fatahillah Jakarta, pantai-pantai Bali dengan ombak tenang, dan berbagai wahana wisata yang aman untuk anak. Kami dapat mengatur itinerary khusus keluarga dengan aktivitas yang sesuai untuk segala usia." },
];

const openFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
    openFaq.value = openFaq.value === index ? null : index;
};
</script>

<template>
    <UContainer class="space-y-12">
        <Heading title="Pertanyaan yang Sering Diajukan" description="Jawaban untuk pertanyaan yang paling sering ditanyakan tentang Trip Java Bali." class="text-center mb-10" />
        <div class="max-w-3xl mx-auto space-y-4">
            <UCard v-for="(faq, idx) in faqs" :key="idx" variant="soft" class="backdrop-blur-sm transition-all">
                <UButton variant="link" class="w-full p-0 h-auto justify-between text-left" @click="toggleFaq(idx)">
                    <div class="flex items-center gap-4 flex-1">
                        <UBadge :label="(idx + 1).toString()" variant="subtle" size="lg" class="shrink-0" />
                        <h3 class="text-muted md:text-lg text-left">{{ faq.question }}</h3>
                    </div>
                    <UIcon name="i-lucide-chevron-down" class="w-5 h-5 shrink-0 transition-transform duration-200" :class="{ 'rotate-180': openFaq === idx }" />
                </UButton>
                <Transition name="fade">
                    <div v-show="openFaq === idx" class="mt-4 overflow-hidden">
                        <div class="pl-14 pr-4">
                            <p class="text-muted leading-relaxed">
                                {{ faq.answer }}
                            </p>
                        </div>
                    </div>
                </Transition>
            </UCard>
        </div>
    </UContainer>
</template>


