<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
type Course = {
  id: number;
  name: string;
};
const courses = reactive<Course[]>([{ id: 1, name: "kaikeba" }]);

fetch("/api-dev/users")
  .then((res) => res.json())
  .then((users) => console.log(users));
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
