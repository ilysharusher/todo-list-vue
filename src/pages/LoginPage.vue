<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
    router.push({ name: 'tasks' });
};
</script>

<template>
    <div>
        <h1>Login Page</h1>
        <button @click="handleLogin" class="btn btn-primary">Login</button>
    </div>
</template>

<style scoped></style>
