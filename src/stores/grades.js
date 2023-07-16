import { defineStore } from "pinia"

export const useGradesStore = defineStore({
  id: "grades",
  state: () => ({
    grades: [],
  }),
  getters: {
    getGWA: (state) => {
      return 1
    },
    getGradeBySubjectCode: (state) => {
      return (givenGrade) => {
        return state.grades.find((grade) => {
          if (grade.subjectCode === givenGrade.subjectCode) return true
          return false
        })
      }
    },
  },
  actions: {
    addGrade(new_grade) {
      if (
        this.grades.some((grade) => {
          if (grade.subjectCode === new_grade.subjectCode) return true
          return false
        })
      ) {
        console.log("Found duplicate grade: Not adding.")
      } else {
        this.grades.push(new_grade)
      }
    },
    editGrade(new_grade) {
      if (
        this.grades.some((grade) => grade.subjectCode === new_grade.subjectCode)
      )
        this.grades = this.grades.map((grade) => {
          if (grade.subjectCode === new_grade.subjectCode) {
            return new_grade
          }
          return grade
        })
      else console.log("No matching grade found.")
    },
    deleteGrade(targetSubjectCode) {
      this.grades = this.grades.filter(
        (grade) => grade.subjectCode !== targetSubjectCode
      )
    },
  },
})
