<script lang="ts" setup>
const props = withDefaults(defineProps<{
    title: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    description?: string
}>(), {
    as: 'h1',
    description: undefined
})
</script>

<template>
    <div class="space-y-1">
        <component :is="props.as" class="text-2xl font-bold md:text-4xl">
            <span class="bg-clip-text text-transparent bg-gradient-to-b from-inverted via-inverted to-dimmed">
                <slot>{{ props.title }}</slot>
            </span>
        </component>
        <p v-if="props.description" class="text-muted xl:text-lg">{{ props.description }}</p>
    </div>
</template>