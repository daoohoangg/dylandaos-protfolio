
<template>
  <nav class="sticky top-0 z-50 bg-white flex justify-center mt-10">
    <div class="relative flex items-center space-x-2 px-3 py-2 bg-white rounded-full shadow-md border border-gray-200 ">

      <div
        class="absolute z-0 bg-gray-100 rounded-full transition-all duration-300 ease-in-out max-w-23"
        :style="highlightStyle"
      ></div>

      <div
        v-for="(item, i) in menu"
        :key="item.name"
        class="relative z-10 px-7 py-1.5 rounded-full text-lg font-medium cursor-pointer transition text-center"
        :class="active === item.name ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'"
        ref="menuRefs"
      >
        <a :href="item.href" @click="setActive(item.name, i)" >
          <span class="block w-full text-center">{{ item.name }}</span>
        </a>
      </div>

    </div>
    
  </nav>
  <div class="flex justify-end text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" stroke-width="1" stroke="currentColor" class="size-3 mt-2 mr-1 ">
      <path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25" />
    </svg>
     Look around…
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const menu = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' }
]

const active = ref(localStorage.getItem('activeTab') || 'Home')
const activeIndex = ref(0)
const menuRefs = ref([]) 

const setActive = (name, index) => {
  active.value = name
  activeIndex.value = index
  localStorage.setItem('activeTab', name)
  nextTick(() => updateHighlight())
}


const highlightStyle = ref({
  width: '0px',
  height: '100%',
  transform: 'translateX(0px)',
})

const updateHighlight = () => {
  const el = menuRefs.value[activeIndex.value]
  if (el) {
    const baseExtra = 10
    const contactExtraRight = 60

    const isContact = active.value === 'Contact'
    const extraRight = isContact ? contactExtraRight : 0

    const width = el.offsetWidth + baseExtra + extraRight
    const offsetX = el.offsetLeft - baseExtra / 2 

    highlightStyle.value = {
      width: `${width}px`,
      height: `${el.offsetHeight}px`,
      transform: `translateX(${offsetX}px)`
    }
  }
}


onMounted(() => {
  const saved = localStorage.getItem('activeTab')
  if (saved) {
    const index = menu.findIndex((m) => m.name === saved)
    if (index !== -1) {
      active.value = saved
      activeIndex.value = index
    }
  }
  nextTick(() => updateHighlight())
})

</script>

<style scoped>

</style>
