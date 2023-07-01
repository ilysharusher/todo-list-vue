<script setup>
import Task from '@/components/tasks/Task.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
const { handleUpdateTask, handleCompleteTask, handleDeleteTask } = taskStore;

const props = defineProps({
    tasks: {
        type: Array,
        required: true
    },
    show: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div v-if="tasks.length && props.show" class="card mt-2">
        <ul class="list-group list-group-flush">
            <Task
                v-for="task in props.tasks"
                :key="task.id"
                :task="task"
                @task-updated="handleUpdateTask"
                @task-completed="handleCompleteTask"
                @task-deleted="handleDeleteTask"
            />
        </ul>
    </div>
</template>

<style scoped></style>
