import { defineStore } from "pinia"

export const useGradesStore = defineStore({
  id: "grades",
  state: () => ({
    grades: [],
  }),
  getters: {
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
    addGrade(newGrade) {
      const hasDuplicate = this.grades.some(
        (grade) => grade.subjectCode === newGrade.subjectCode
      )

      if (hasDuplicate) {
        console.log("Found duplicate grade: Not adding.")
        return
      }

      this.grades.unshift(newGrade)
    },
    editGrade(newGrade) {
      const hasMatching = this.grades.some(
        (grade) => grade.subjectCode === newGrade.subjectCode
      )

      if (!hasMatching) {
        console.log("No matching grade found.")
        return
      }

      this.grades = this.grades.map((grade) => {
        if (grade.subjectCode === newGrade.subjectCode) {
          return newGrade
        }
        return grade
      })
    },
    deleteGrade(targetSubjectCode) {
      this.grades = this.grades.filter(
        (grade) => grade.subjectCode !== targetSubjectCode
      )
    },
  },
})
