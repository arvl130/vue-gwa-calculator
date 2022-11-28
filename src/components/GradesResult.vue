<template>
  <div v-if="gradesStore.grades.length > 1 && !hasResult" class="d-flex">
    <button class="btn btn-success ms-auto px-3" @click="onCalculateGWA">
      Calculate
    </button>
  </div>
  <div v-else-if="hasResult" class="d-flex">
    <div class="col-sm">
      <span class="lead"
        ><span class="fw-bold">Calculated GWA:</span> {{ gradesResult }}</span
      >
    </div>
    <button class="btn btn-success ms-auto px-3" @click="onReset">Reset</button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useGradesStore } from "../stores/grades"

const gradesResult = ref(null)
const hasResult = ref(false)
const gradesStore = useGradesStore()

const calculateGWA = (grades) => {
  const [totalGradesTimesUnits, totalUnits] = grades.reduce(
    (prevValue, currValue) => {
      const [runningGradesTimesUnits, runningUnits] = prevValue
      return [
        runningGradesTimesUnits +
          parseInt(currValue.units) * parseFloat(currValue.pointGrade),
        runningUnits + parseInt(currValue.units),
      ]
    },
    [0, 0]
  )

  return totalGradesTimesUnits / totalUnits
}

const onCalculateGWA = () => {
  gradesResult.value = calculateGWA(gradesStore.grades)
  hasResult.value = true
}

const onReset = () => {
  gradesStore.$reset()
  gradesResult.value = null
  hasResult.value = false
}
</script>
