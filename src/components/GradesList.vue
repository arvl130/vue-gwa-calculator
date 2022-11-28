<template>
  <div v-if="gradesStore.grades.length > 0" class="mb-3 d-grid gap-2">
    <GradeItem
      v-for="grade in gradesStore.grades"
      :key="grade.subjectCode"
      :grade="grade"
    />
  </div>
  <p v-else class="lead text-center">No grades entered</p>
</template>

<script setup>
import GradeItem from "./GradeItem.vue";
import { useGradesStore } from "../stores/grades";

const gradesStore = useGradesStore();
</script>
