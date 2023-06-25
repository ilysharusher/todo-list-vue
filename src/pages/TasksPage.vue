<script setup>
import { computed, onMounted, ref } from 'vue';
import { getTasks, createTask, updateTask, deleteTask, completeTask } from '@/http/task-api';
import Tasks from '@/components/tasks/Tasks.vue';

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
</script>

<template>
    <main style="min-height: 50vh; margin-top: 2rem">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="relative">
                        <input
                            type="text"
                            class="form-control form-control-lg padding-right-lg"
                            placeholder="+ Add new task. Press enter to save."
                        />
                    </div>
                    <Tasks :tasks="uncompletedTasks" />

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

                    <Tasks :show="completedTaskIsVisible && showCompletedTasks" :tasks="completedTasks" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
