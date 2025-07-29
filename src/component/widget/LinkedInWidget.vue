<template>
  <div ref="container" class="relative w-full overflow-hidden" style="border-radius: 12px;">
    <div ref="badge"
         class="badge-base LI-profile-badge"
         data-locale="en_US"
         data-size="medium"
         data-theme="light"
         data-type="VERTICAL"
         data-vanity="daoohoangg"
         data-version="v1">
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'

const container = ref(null)
const badge = ref(null)

onMounted(async () => {
  if (!document.querySelector('#linkedin-badge-script')) {
    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    script.id = 'linkedin-badge-script'
    document.body.appendChild(script)
  }

  // Wait for badge to render, then scale it
  setTimeout(() => {
    const containerWidth = container.value?.offsetWidth || 300
    const badgeWidth = badge.value?.offsetWidth || 400

    const scale = containerWidth / badgeWidth
    badge.value.style.transform = `scale(${scale})`
    badge.value.style.transformOrigin = 'top left'
    badge.value.style.width = `${badgeWidth}px` // prevent collapse
  }, 1000) // Delay to wait for LinkedIn badge to render
})
</script>

<style scoped>
/* Optional height limit */
div[ref="container"] {
  max-width: 100%;
}
</style>
