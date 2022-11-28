<template>
  <form>
    <div class="row g-2 mb-2">
      <div class="col-md-8">
        <div class="form-group">
          <label for="">Subject code:</label>
          <input type="text" class="form-control" v-model="grade.subjectCode" />
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="">Units:</label>
          <input type="text" class="form-control" v-model="grade.units" />
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <label for="">Grade:</label>
          <input type="text" class="form-control" v-model="grade.pointGrade" />
        </div>
      </div>
    </div>
    <div class="d-flex mb-3">
      <button
        class="btn btn-warning ms-auto px-3"
        @click.prevent="gradesStore.addGrade({ ...grade })"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useGradesStore } from "../stores/grades";

const grade = reactive({
  subjectCode: "",
  units: "",
  pointGrade: "",
});

const gradesStore = useGradesStore();
</script>
