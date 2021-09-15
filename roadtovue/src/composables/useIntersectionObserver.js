import { ref, unref, onMounted, onUnmounted } from 'vue'

export const useIntersectionObserver = (el, options = {}, onEntry) => {
  console.log({ options })

  let observer = null
  let isIntersecting = ref(false)

  onMounted(() => {
    const $el = unref(el)
    if (!($el instanceof HTMLElement))
      throw new Error(
        'useIntersectionObserver: ref.value is not an HTMLElement'
      )

    // Render the VeryLargeComponent when the container intersects
    const intersectionCallback = entries => {
      entries.forEach(entry => {
        console.log('entry', entry)

        isIntersecting.value = entry.isIntersecting
        if (typeof onEntry === 'function') onEntry(entry)
      })
    }
    observer = new IntersectionObserver(intersectionCallback, options)

    observer.observe($el)
  })

  onUnmounted(() => {
    console.log('UNMOUNTED')

    observer?.disconnect()
  })

  return {
    isIntersecting,
    observer,
  }
}
