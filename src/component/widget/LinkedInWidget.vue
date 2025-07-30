<template>
  <div ref="container" class="h-100 overflow-hidden transform md:scale-125 lg:scale-150 scale-135 scale-y-140 origin-top-left max-w-250" style="border-radius: 12px;">
    <div ref="badge"
         class="badge-base LI-profile-badge max-w-75"
         data-locale="en_US"
         data-size="large"
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

  setTimeout(() => {
    const containerWidth = container.value?.offsetWidth || 300
    const badgeWidth = badge.value?.offsetWidth || 400

    const scale = containerWidth / badgeWidth
    badge.value.style.transform = `scale(${scale})`
    badge.value.style.transformOrigin = 'top left'
    badge.value.style.width = `${badgeWidth}px`
  }, 1)
})
</script>

<style scoped>
</style>
