<template>
  <div class="mt-10 font-sans">
    <section class="bg-gray-50 text-white p-6 rounded-xl shadow-md">
      <div class="flex flex-col md:flex-row gap-6">

        <!-- Left: Collection Info -->
        <div class="p-4 rounded-lg flex-1 max-w-sm">
          <img src="https://opennftbucket.s3.us-east-1.amazonaws.com/2.1.avif" alt="DX Terminal Logo"
            class="w-20 h-20 rounded-xl" />
          <h3 class="text-xl font-semibold flex items-center gap-2 text-gray-800">
            DX Terminal
            <span class="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" stroke-linejoin="round"
                stroke-miterlimit="2" clip-rule="evenodd" id="verify" fill="white">
                <path
                  d="M600.64,331.889C599.387,331.572 597.947,331.911 596.929,332.929C595.911,333.947 595.572,335.387 595.889,336.641C594.779,337.302 594,338.561 594,340C594,341.439 594.779,342.698 595.889,343.36C595.572,344.613 595.911,346.053 596.929,347.071C597.947,348.089 599.387,348.428 600.641,348.111C601.302,349.221 602.561,350 604,350C605.439,350 606.698,349.221 607.36,348.111C608.613,348.428 610.053,348.089 611.071,347.071C612.089,346.053 612.428,344.613 612.111,343.359C613.221,342.698 614,341.439 614,340C614,338.561 613.221,337.302 612.111,336.64C612.428,335.387 612.089,333.947 611.071,332.929C610.053,331.911 608.613,331.572 607.359,331.889C606.698,330.779 605.439,330 604,330C602.561,330 601.302,330.779 600.64,331.889ZM600.627,334.039C600.905,334.227 601.26,334.263 601.571,334.135C601.881,334.006 602.106,333.73 602.17,333.4C602.323,332.603 603.101,332 604,332C604.899,332 605.677,332.603 605.83,333.4C605.894,333.73 606.119,334.006 606.429,334.135C606.74,334.263 607.095,334.227 607.373,334.039C608.044,333.584 609.021,333.708 609.657,334.343C610.292,334.979 610.416,335.956 609.961,336.627C609.773,336.905 609.737,337.26 609.865,337.571C609.994,337.881 610.27,338.106 610.6,338.17C611.397,338.323 612,339.101 612,340C612,340.899 611.397,341.677 610.6,341.83C610.27,341.894 609.994,342.119 609.865,342.429C609.737,342.74 609.773,343.095 609.961,343.373C610.416,344.044 610.292,345.021 609.657,345.657C609.021,346.292 608.044,346.416 607.373,345.961C607.095,345.773 606.74,345.737 606.429,345.865C606.119,345.994 605.894,346.27 605.83,346.6C605.677,347.397 604.899,348 604,348C603.101,348 602.323,347.397 602.17,346.6C602.106,346.27 601.881,345.994 601.571,345.865C601.26,345.737 600.905,345.773 600.627,345.961C599.956,346.416 598.979,346.292 598.343,345.657C597.708,345.021 597.584,344.044 598.039,343.373C598.227,343.095 598.263,342.74 598.135,342.429C598.006,342.119 597.73,341.894 597.4,341.83C596.603,341.677 596,340.899 596,340C596,339.101 596.603,338.323 597.4,338.17C597.73,338.106 598.006,337.881 598.135,337.571C598.263,337.26 598.227,336.905 598.039,336.627C597.584,335.956 597.708,334.979 598.343,334.343C598.979,333.708 599.956,333.584 600.627,334.039ZM600.293,340.705L602.315,342.727C602.705,343.117 603.338,343.117 603.729,342.727L607.707,338.749C608.097,338.358 608.097,337.725 607.707,337.334C607.317,336.944 606.683,336.944 606.293,337.334L603.022,340.606C603.022,340.606 601.707,339.291 601.707,339.291C601.317,338.901 600.683,338.901 600.293,339.291C599.903,339.681 599.903,340.315 600.293,340.705Z"
                  transform="translate(-592 -328)"></path>
              </svg>
            </span>
          </h3>
          <p class="text-sm mt-1 text-gray-400">7d sales: 175,001 <span class="text-green-500">+23.52%</span></p>
          <p class="mt-4 text-gray-700 text-sm">
            Welcome to Terminal City!<br />
            This collection is where each of your AI Trader NFTs will appear.
            comes with its own PFP...
          </p>
          <router-link to="/work/open-nft" class="z-30 relative pointer-events-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="mt-1 size-12 -rotate-45 text-gray-400 group-hover:text-black group-hover:scale-110 transition duration-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </router-link>
        </div>

        <!-- Right: NFT List -->
        <div class="hidden md:grid flex-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <div v-for="item in nftItems" :key="item.name" class="bg-gray-400/20 rounded-lg overflow-hidden relative hover:shadow-lg 
                   transition-transform duration-300 ease-in-out transform hover:scale-105"
            @mouseenter="hoveredItem = item" @mousemove="updateTooltipPosition" @mouseleave="hoveredItem = null">
            <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover" />
            <div class="p-2">
              <p class="font-semibold text-sm text-gray-700">{{ item.name }}</p>
              <p class="text-gray-400 text-sm">${{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tooltip detail -->
      <div v-if="hoveredItem"
        class="bg-gray-100 rounded-lg p-4 flex gap-4 items-start shadow-lg z-50 pointer-events-none text-gray-600"
        :style="{ position: 'fixed', top: tooltipY + 'px', left: tooltipX + 'px' }">
        <img :src="hoveredItem.image" :alt="hoveredItem.name" class="w-24 h-24 object-cover rounded" />
        <div>
          <h3 class="font-bold mb-2">{{ hoveredItem.name }}</h3>
          <div class="grid grid-cols-3 gap-2 border-t pt-2 text-xs">
            <div class="font-semibold">Attribute</div>
            <div class="font-semibold">Trait</div>
            <div class="font-semibold">Floor</div>

            <div>Background</div>
            <div>{{ hoveredItem.background }}</div>
            <div>${{ hoveredItem.floorPrice }}</div>

            <div>Skin</div>
            <div>{{ hoveredItem.skin }}</div>
            <div>${{ hoveredItem.floorPrice }}</div>

            <div>Eyes</div>
            <div>{{ hoveredItem.eyes }}</div>
            <div>${{ hoveredItem.floorPrice }}</div>

            <div>Pants</div>
            <div>{{ hoveredItem.pants }}</div>
            <div>${{ hoveredItem.floorPrice }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue"

const hoveredItem = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)

function updateTooltipPosition(e) {
  tooltipX.value = e.clientX + 20 // cách con trỏ 20px
  tooltipY.value = e.clientY + 20
}

const nftItems = [
  {
    name: "GearGuru70 #4332",
    price: "145.3",
    image: "https://opennftbucket.s3.us-east-1.amazonaws.com/2.3.avif",
    background: "Blue",
    skin: "Light",
    eyes: "Green",
    pants: "Black",
    floorPrice: "120.0",
  },
  {
    name: "Rote_Rose #1684",
    price: "153.7",
    image: "https://opennftbucket.s3.us-east-1.amazonaws.com/2.2.avif",
    background: "Red",
    skin: "Dark",
    eyes: "Brown",
    pants: "Blue",
    floorPrice: "130.0",
  },
  {
    name: "MemeMaus #2934",
    price: "235.5",
    image: "https://opennftbucket.s3.us-east-1.amazonaws.com/2.1.avif",
    background: "Purple",
    skin: "Light",
    eyes: "Blue",
    pants: "White",
    floorPrice: "200.0",
  },
]
</script>
