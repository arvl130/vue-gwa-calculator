<template>
  <div v-if="!isEditable" class="row align-items-center">
    <div class="col-2">
      <button
        type="button"
        class="btn btn-danger"
        @click="gradesStore.deleteGrade(props.grade.subjectCode)"
      >
        <i class="bi bi-trash"></i>
      </button>
      <button
        type="button"
        class="btn btn-warning ms-1"
        @click="isEditable = !isEditable"
      >
        <i class="bi bi-pencil"></i>
      </button>
    </div>
    <div class="col-6">{{ props.grade.subjectCode }}</div>
    <div class="col-2">{{ props.grade.units }}</div>
    <div class="col-2">{{ props.grade.pointGrade }}</div>
  </div>
  <div v-else class="row align-items-center g-2">
    <div class="col-2">
      <button
        type="button"
        class="btn btn-danger"
        @click="gradesStore.deleteGrade(props.grade.subjectCode)"
      >
        <i class="bi bi-trash"></i>
      </button>
      <button
        type="button"
        class="btn btn-primary ms-1"
        @click="commitLocalGrade({ ...local_grade })"
      >
        <i class="bi bi-check-lg"></i>
      </button>
    </div>
    <div class="col-6">
      {{ props.grade.subjectCode }}
    </div>
    <div class="col-2">
      <input
        type="number"
        class="form-control"
        v-model="local_grade.units"
        :min="1"
      />
    </div>
    <div class="col-2">
      <input
        type="number"
        class="form-control"
        v-model="local_grade.pointGrade"
        :min="0"
        :step="0.01"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useGradesStore } from "../stores/grades"

const props = defineProps({
  grade: Object,
})

const isEditable = ref(false)
const local_grade = ref({
  subjectCode: "",
  units: 1,
  pointGrade: 0,
})
const gradesStore = useGradesStore()
const getGradeBySubjectCode = gradesStore.getGradeBySubjectCode

onMounted(() => {
  local_grade.value = { ...getGradeBySubjectCode(props.grade) }
})

const commitLocalGrade = (new_grade) => {
  gradesStore.editGrade(new_grade)
  isEditable.value = !isEditable.value
}
</script>
