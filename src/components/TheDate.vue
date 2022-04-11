<template>
  <div>Date counter</div>
   <h1 @click="inc">Best day: {{ day + ' ' + strMonth + ' ' + year }} </h1>
  <div>Counter page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore, consectetur quaerat alias distinctio, numquam sit perferendis natus placeat, omnis aliquam. Placeat reprehenderit, sed aliquam eaque odit debitis aspernatur minima?</div>
</template>
<script>
import { computed, ref } from 'vue'
import { defineComponent } from '@vue/composition-api'
import { useDate } from '../Hooks/useDate'
import { createCounter } from '../Hooks/useCounter'

export default defineComponent({
  setup() {
    const today = ref(new Date())
    const { counter, inc } = createCounter(0)
    const computedDate = computed(() => {
      return new Date(+today.value + (counter.value * 1000 * 60 * 60 * 24))
    })
    const { day, strMonth, year, isHoliday } = useDate(computedDate)

    setInterval(() => { today.value = new Date}, 5000)

    console.log(day, strMonth, year, isHoliday);
    return {
      inc,
      day,
      strMonth,
      year,
      isHoliday,
    }
  },
})
</script>
