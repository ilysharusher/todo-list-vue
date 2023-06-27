<script setup>
import { defineEmits, reactive } from 'vue';

const emits = defineEmits({
    'task-created': Object
});

const newTask = reactive({
    name: '',
    is_completed: false
});

const createNewTask = () => {
    if (!newTask.name.trim()) {
        return;
    }

    emits('task-created', newTask)
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
