<template>
  <div v-if="gradesStore.grades.length > 1 && !gradesResult" class="d-flex">
    <button
      class="btn btn-success ms-auto px-3"
      @click="gradesResult = calculateGWA(gradesStore.grades)"
    >
      Calculate
    </button>
  </div>
  <div v-else-if="gradesResult" class="d-flex">
    <div class="col-sm">
      <span class="lead"
        ><span class="fw-bold">Calculated GWA:</span> {{ gradesResult }}</span
      >
    </div>
    <button class="btn btn-success ms-auto px-3" @click="gradesResult = null">
      Reset
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGradesStore } from "../stores/grades";

const gradesResult = ref(null);
const gradesStore = useGradesStore();

const calculateGWA = (grades) => {
  console.log(grades);
  const [totalGradesTimesUnits, totalUnits] = grades.reduce(
    (prevValue, currValue) => {
      const [runningGradesTimesUnits, runningUnits] = prevValue;
      return [
        runningGradesTimesUnits +
          parseInt(currValue.units) * parseFloat(currValue.pointGrade),
        runningUnits + parseInt(currValue.units),
      ];
    },
    [0, 0]
  );

  return totalGradesTimesUnits / totalUnits;
};
</script>
