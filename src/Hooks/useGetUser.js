import { computed, ref, watch } from 'vue'

export const useGetUser = (id) => {

  const user = ref({})
  const isLoading =  ref(true)

  watch(id, () => {
    isLoading.value = true
    user.value = ''

    fetch('https://reqres.in/api/users?id=' + id.value)
      .then(responce => {
        return responce.json()
      })
      .then((data) => {
        user.value = data.data
      })
      .catch(function(err) {
       console.log(err)
      })
      .finally(() => {
        isLoading.value = false
      })
  }, {
    immediate: true,
  })

  const name = computed(() => {
    return user.value.first_name
  })

  return {
    name,
    user,
    isLoading,
  }
}