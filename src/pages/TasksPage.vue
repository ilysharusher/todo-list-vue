<script setup>
import { computed, onMounted, ref } from 'vue';
import { getTasks, createTask, updateTask, deleteTask, completeTask } from '@/http/task-api';
import Tasks from '@/components/tasks/Tasks.vue';
import NewTask from '@/components/tasks/NewTask.vue';

const tasks = ref([]);

onMounted(async () => {
    const { data } = await getTasks();
    tasks.value = data.data;
});

const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed));
const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed));

const showCompletedButton = computed(
    () => completedTasks.value.length && uncompletedTasks.value.length
);

const showCompletedTasks = ref(true);
const completedTaskIsVisible = computed(
    () => uncompletedTasks.value.length === 0 || completedTasks.value.length
);

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
</script>

<template>
    <main style="min-height: 50vh; margin-top: 2rem">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <NewTask @task-created="handleCreateTask" />
                    <Tasks
                        @task-updated="handleUpdateTask"
                        @task-completed="handleCompleteTask"
                        @task-deleted="handleDeleteTask"
                        :tasks="uncompletedTasks" />

                    <div class="my-3 text-center">
                        <button
                            @click="showCompletedTasks = !showCompletedTasks"
                            v-show="showCompletedButton"
                            class="btn btn-secondary btn-lg"
                        >
                            <span v-if="showCompletedTasks === false">Show completed tasks</span>
                            <span v-if="showCompletedTasks === true">Hide completed tasks</span>
                        </button>
                    </div>

                    <Tasks
                        @task-updated="handleUpdateTask"
                        @task-completed="handleCompleteTask"
                        @task-deleted="handleDeleteTask"
                        :show="completedTaskIsVisible && showCompletedTasks"
                        :tasks="completedTasks"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
