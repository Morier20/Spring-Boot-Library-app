<script setup lang="ts">
import {ref} from 'vue';
const main = ref<string>('Hello World!');
</script>

<template>
    <div class="display">
        {{ main }}
    </div>

</template>

<style>

</style>