<script setup>
import IconPencil from '@/components/icons/IconPencil.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

const emits = defineEmits({
    'task-updated': Boolean,
    'task-deleted': Boolean
});

const props = defineProps({
    task: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="task-actions">
        <button
            @click="emits('task-updated', true)"
            class="btn btn-sm btn-circle btn-outline-secondary me-1">
            <IconPencil />
        </button>
        <button
            @click="emits('task-deleted', true)"
            class="btn btn-sm btn-circle btn-outline-danger">
            <IconTrash />
        </button>
    </div>
</template>

<style scoped></style>
