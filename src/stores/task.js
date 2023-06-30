import { defineStore } from 'pinia';
import { getTasks } from '@/http/task-api';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        task: {
            id: '',
            name: 'First Task',
            is_completed: false
        }
    }),
    getters: {
        completedTasks() {
            return this.tasks.filter((task) => task.is_completed);
        },
        uncompletedTasks() {
            return this.tasks.filter((task) => !task.is_completed);
        }
    },
    actions: {
        async fetchTasks() {
            const { data } = await getTasks();
            this.tasks = data.data;
        }
    }
});
