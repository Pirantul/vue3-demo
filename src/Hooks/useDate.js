// import { computed, ref, watch } from 'vue'

import { computed } from "vue";

 
export const useDate = (date) => {
  const arrMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]
  // const holidays = []
  const day = computed(() => date.value.getDate());
  const month = computed(() => date.value.getMonth());
  const year = computed(() => date.value.getFullYear());
  

  // const strMonth = computed(() => {
  //   return holidays.includes(date.value)
  // })

  const strMonth = computed(() => {
    return arrMonth[month.value]
  })

  return {
    day,
    strMonth,
    year,
  }
}
