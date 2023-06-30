import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        task: {
            id: '',
            name: 'First Task',
            is_completed: false
        }
    })
});
