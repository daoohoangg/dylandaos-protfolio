<template>
  <div class="relative group">
    <div
      class="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 pointer-events-none">
    </div>

    <div class="bg-gray-50 rounded-xl shadow-md p-5 w-full pr-3 mt-10 relative z-20">
    
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-3xl font-medium text-black mb-4 font-sans">Grocery Shop</h2>
          <p class="text-2xl text-gray-500">A food order and delivery concept</p>
        </div>
        <router-link
          to="/work/grocery-shop"
          class="z-30 relative pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-18 -rotate-45 text-gray-400 group-hover:text-black group-hover:scale-110 transition duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </router-link>
      </div>

      <hr class="mb-9 text-gray-300">

      
      <div class="relative w-full flex justify-center items-start h-150 overflow-hidden">
        <div class="absolute z-10 w-2/4 mt-15 scale-100 md:scale-110 transition-transform duration-300 translate-x-[100px]">
          <img
            src="https://dylan-portifolio.s3.us-east-1.amazonaws.com/Screenshot+2025-08-05+155648-portrait.png"
            alt=""
            class="w-full object-cover"
          >
        </div>
        <div class="absolute z-0 w-2/4 -rotate-10 mt-20 scale-100 md:scale-110 transition-transform duration-300 translate-x-[-100px]">
          <img
            src="https://dylan-portifolio.s3.us-east-1.amazonaws.com/Screenshot+2025-08-05+155813-portrait.png"
            alt=""
            class="w-full object-cover"
          >
        </div>
      </div>
    </div>
  </div>
</template>
