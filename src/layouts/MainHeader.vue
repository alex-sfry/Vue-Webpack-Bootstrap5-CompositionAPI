<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="bg-secondary-subtle">
        <div class="container d-flex h-100">
            <div>
                <RouterLink to="/" class="me-5">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
        </div>
    </header>
</template>
