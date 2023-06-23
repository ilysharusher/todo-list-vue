<script setup>
import { defineProps, ref } from 'vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

const props = defineProps({
    task: {
        type: Object,
        required: true
    }
});

const completedTask = ref(props.task.is_completed ? 'completed' : '') ;
</script>

<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input
                :class="completedTask"
                :checked="props.task.is_completed"
                class="form-check-input mt-0"
                type="checkbox"
            />
            <div
                :class="completedTask"
                class="ms-2 flex-grow-1"
                title="Double click the text to edit or remove"
            >
                <!-- <div class="relative">
                    <input class="editable-task" type="text" />
                </div> -->
                <span>{{ props.task.name }}</span>
            </div>
            <!--                                    <div class="task-date">24 Feb 12:00</div>-->
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
                <IconPencil />
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger">
                <IconTrash />
            </button>
        </div>
    </li>
</template>

<style scoped></style>
