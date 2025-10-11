<script setup>
import { RouterView } from 'vue-router';
import MainHeader from '@/layouts/MainHeader.vue';
import MainFooter from '@/layouts/MainFooter.vue';
import HomeView from '@/views/HomeView.vue';
</script>

<template>
    <MainHeader />

    <!-- <HomeView /> -->
    <RouterView />

    <MainFooter />
</template>
