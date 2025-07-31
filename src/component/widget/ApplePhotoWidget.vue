<template>
  <div class="relative rounded-xl overflow-hidden shadow-md bg-gray-100 h-full aspect-[4/3] group">
    <!-- Click vào ảnh chính để chuyển ảnh -->
    <img
      :src="selectedImage"
      :alt="selectedCategory.name"
      class="w-full h-full object-cover object-center aspect-[4/3] cursor-pointer"
      @click="nextImage"
    />

    <!-- Apple icon -->
    <a href="https://www.icloud.com/sharedalbum/#B1h5oqs3q2V3xkJ;..." target="_blank">
      <div class="absolute top-3 right-3 w-14 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center">
        <img src="../../assets/apple-photos.svg" alt="Apple Photo" />
      </div>
    </a>

    <!-- Nút chọn category -->
    <div class="absolute bottom-0 left-0 right-0 rounded-b-xl p-3">
      <div class="flex items-center justify-between
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500 ease-in-out">
        <button
          v-for="(category, index) in categories"
          :key="index"
          @click="selectCategory(category)"
          :class="[
            'bg-white border border-gray-300 rounded-full p-2 flex items-center justify-center shadow-sm',
            selectedCategory.name === category.name ? 'ring-2 ring-gray-400' : ''
          ]"
        >
          <span v-html="category.icon" class="w-5 h-5"></span>
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed,watch  } from 'vue'

const categories = [
  {
    name: 'Maps',
    images: [
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/1.2.JPG',
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/1.3.JPG'
    ],
    icon: `<svg class="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
             <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
           </svg>`
  },
  {
    name: 'Location',
    images: [
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/2.1.JPG',
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/2.2.JPG'
    ],
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
           </svg>`
  },
  {
    name: 'Love',
    images: [
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/3.1.JPG',
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/3.2.jpg'
    ],
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
           </svg>`
  },
  {
    name: 'Nature',
    images: [
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/4.1.JPG',
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/4.2.JPG',
      'https://dylan-portifolio.s3.us-east-1.amazonaws.com/4.3.JPG'
    ],
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"/>
           </svg>`
  }
]

const selectedCategory = ref(categories[0])
const currentImageIndex = ref(0)

watch(selectedCategory, () => {
  currentImageIndex.value = 0 
})

const selectedImage = computed(() => {
  return selectedCategory.value.images[currentImageIndex.value]
})

function selectCategory(category) {
  if (selectedCategory.value.name !== category.name) {
    selectedCategory.value = category
  }
  currentImageIndex.value = 0
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % selectedCategory.value.images.length
}
</script>
