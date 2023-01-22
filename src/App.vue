<script setup>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import GradesForm from "./components/GradesForm.vue"
import GradesList from "./components/GradesList.vue"
import GradesResult from "./components/GradesResult.vue"
</script>

<template>
  <nav
    class="navbar navbar-expand navbar-dark bg-dark border-bottom border-primary border-3"
  >
    <div class="container">
      <a href="#" class="navbar-brand">GWA Calculator</a>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://filipiknow.net/how-to-compute-gwa/">
            Learn How
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <main class="p-5">
    <div class="container">
      <p class="display-5 text-center mb-5">Enter your grades below</p>
      <GradesForm />
      <GradesList />
      <GradesResult />
    </div>
  </main>
  <footer class="text-center px-2 py-3">Angelo Geulin &copy; 2023</footer>
</template>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

footer {
  font-weight: 500;
}
</style>
