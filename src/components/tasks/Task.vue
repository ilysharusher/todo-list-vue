<script setup>
import { defineProps, ref } from 'vue';
import TaskActions from '@/components/tasks/TaskActions.vue';

const props = defineProps({
    task: {
        type: Object,
        required: true
    }
});

const emits = defineEmits({
    'task-updated': Object,
    'task-deleted': Number
});

const completedTask = ref(props.task.is_completed ? 'completed' : '');

const isEditing = ref(false);
const taskText = ref(props.task.name);

const updateTask = async () => {
    if (!taskText.value.trim()) {
        return;
    } else if (taskText.value === props.task.name) {
        isEditing.value = false;
        return;
    }

    emits('task-updated', {
        ...props.task,
        name: taskText.value
    });

    isEditing.value = false;
};

const vFocus = (el) => el.focus();
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
                @dblclick="isEditing = true"
                :class="completedTask"
                class="ms-2 flex-grow-1"
                title="Double click the text to edit or remove"
            >
                <div v-if="isEditing" class="relative">
                    <input
                        @keyup.enter="updateTask"
                        @keyup.esc="isEditing = false"
                        v-model="taskText"
                        class="editable-task"
                        type="text"
                        placeholder="Edit task"
                        v-focus
                    />
                </div>
                <span v-else>{{ props.task.name }}</span>
            </div>
            <!--                                    <div class="task-date">24 Feb 12:00</div>-->
        </div>
        <TaskActions @task-updated="isEditing = true" :task="props.task" v-show="!isEditing" />
    </li>
</template>

<style scoped></style>
