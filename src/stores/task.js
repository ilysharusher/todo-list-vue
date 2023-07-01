import { defineStore } from 'pinia';
import { completeTask, createTask, deleteTask, getTasks, updateTask } from '@/http/task-api';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([]);

    const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed));
    const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed));

    const fetchTasks = async () => {
        const { data } = await getTasks();
        tasks.value = data.data;
    };

    const handleCreateTask = async (newTask) => {
        const { data: createdTask } = await createTask(newTask);
        tasks.value.unshift(createdTask.data);
    };

    const handleUpdateTask = async (updatedTask) => {
        const { data: updatedTaskData } = await updateTask(updatedTask.id, updatedTask);
        const currentTask = tasks.value.findIndex((task) => task.id === updatedTaskData.data.id);
        tasks.value[currentTask] = updatedTaskData.data;
    };

    const handleCompleteTask = async (completedTask) => {
        const { data: completedTaskData } = await completeTask(completedTask.id, completedTask);
        const currentTask = tasks.value.findIndex((task) => task.id === completedTaskData.data.id);
        tasks.value[currentTask] = completedTaskData.data;
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        tasks.value = tasks.value.filter((task) => task.id !== taskId);
    };

    return {
        tasks,
        completedTasks,
        uncompletedTasks,
        fetchTasks,
        handleCreateTask,
        handleUpdateTask,
        handleCompleteTask,
        handleDeleteTask
    };
});
