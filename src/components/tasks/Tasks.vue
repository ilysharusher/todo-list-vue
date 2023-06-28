<script setup>
import Task from '@/components/tasks/Task.vue';

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
                @task-updated="$emit('task-updated', $event)"
            />
        </ul>
    </div>
</template>

<style scoped></style>
