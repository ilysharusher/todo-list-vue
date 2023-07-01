<script setup>
import { computed, onMounted, ref } from 'vue';
import { useTaskStore } from '@/stores/task';
import { storeToRefs } from 'pinia';
import Tasks from '@/components/tasks/Tasks.vue';
import NewTask from '@/components/tasks/NewTask.vue';

const taskStore = useTaskStore();
const { completedTasks, uncompletedTasks } = storeToRefs(taskStore);
const { fetchTasks } = taskStore;

onMounted(async () => {
    await fetchTasks();
});

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
                    <NewTask />
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

                    <Tasks
                        :show="completedTaskIsVisible && showCompletedTasks"
                        :tasks="completedTasks"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
