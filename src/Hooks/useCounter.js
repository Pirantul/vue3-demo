import { ref, computed } from 'vue'

export const useCounter = (start) => {
  const counter = ref(start)

  const inc = () => {
    counter.value++
  }

  const text = computed(() => {
    return ' Счетчик: + ' + counter.value
  })

  return {
    counter,
    inc,
    text,
  }
}