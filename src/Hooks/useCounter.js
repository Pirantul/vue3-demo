
import { ref, computed } from 'vue'

export const createCounter = (start) => {
  const counter = ref(start)
  
  const inc = () => {
    counter.value++
  }

  const text = computed(() => {
    return 'Наш счетчик - ' + counter.value
  })
  
  return {
    counter,
    inc,
    text,
  }
}

