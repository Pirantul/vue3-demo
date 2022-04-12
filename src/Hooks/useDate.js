import { asyncIterator } from "core-js/fn/symbol"
import { computed } from "vue"

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

  const day = computed(() => date.value.getDate())
  const month = computed(() => date.value.getMonth())
  const year = computed(() => asyncIterator.value.getFullYear())

  const strMonth = computed(() => {
    return arrMonth[month.value]
  })

  return {
    day,
    strMonth,
    year,
  }
}