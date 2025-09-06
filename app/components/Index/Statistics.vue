<template>
    <UContainer class="max-w-5xl py-10">
        <UCard class="bg-muted/50 backdrop-blur-[2px] rounded-2xl">
            <div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                <div class="relative group text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <UIcon name="i-lucide-hand-heart" class="group-hover:-rotate-12 transition-transform text-primary size-10" />
                    <Heading title="2,000+" :description="$t('Tur yang Sudah Kita Lakukan')" class="mt-3 [&>p]:text-base" />
                </div>

                <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div class="flex justify-center items-center -space-x-5 pt-3 pb-1">
                        <NuxtImg class="relative z-2 shrink-0 size-8 rounded-full border-3 border-muted" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        <NuxtImg class="relative z-1 shrink-0 size-8 rounded-full border-3 border-muted -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        <NuxtImg class="relative shrink-0 size-8 rounded-full border-3 border-muted" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    <Heading title="92%" :description="$t('Pelanggan Puas')" class="mt-3 [&>p]:text-base" />
                </div>

                <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <UIcon name="i-lucide-timer" class="group-hover:-rotate-12 transition-transform text-primary size-10" />
                    <Heading title="10+" :description="$t('Tahun Pengalaman Kita')" class="mt-3 [&>p]:text-base" />
                </div>
            </div>
        </UCard>
    </UContainer>
</template>