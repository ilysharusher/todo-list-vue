import { defineStore } from 'pinia';
import { getTasks } from '@/http/task-api';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([]);

    const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed));
    const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed));

    const fetchTasks = async () => {
        const { data } = await getTasks();
        tasks.value = data.data;
    };

    return {
        tasks,
        completedTasks,
        uncompletedTasks,
        fetchTasks
    };
});
