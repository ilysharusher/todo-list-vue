<script setup>
import Task from '@/components/tasks/Task.vue';

const props = defineProps({
    tasks: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div v-if='tasks.length' class="card mt-2">
        <ul class="list-group list-group-flush">
            <Task v-for="task in props.tasks" :key="task.id" :task="task" />
        </ul>
    </div>
</template>

<style scoped></style>