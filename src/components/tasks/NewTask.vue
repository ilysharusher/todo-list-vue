<script setup>
import { reactive } from 'vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
const { handleCreateTask } = taskStore;

const newTask = reactive({
    name: '',
    is_completed: false
});

const createNewTask = async () => {
    if (!newTask.name.trim()) {
        return;
    }

    await handleCreateTask(newTask);
    newTask.name = '';
};
</script>

<template>
    <div class="relative">
        <input
            v-model="newTask.name"
            @keyup.enter="createNewTask"
            type="text"
            class="form-control form-control-lg padding-right-lg"
            placeholder="+ Add new task. Press enter to save."
        />
    </div>
</template>

<style scoped></style>
