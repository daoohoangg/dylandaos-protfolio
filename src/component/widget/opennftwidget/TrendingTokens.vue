<template>
    <section class="w-full overflow-x-auto select-none">
        <h2 class="text-2xl font-semibold mb-1">Trending Tokens</h2>
        <p class="text-lg text-gray-400 mb-4 ">Largest price change in the past hour</p>

        <div class="grid grid-flow-col grid-rows-2 gap-4 snap-x snap-mandatory scroll-smooth px-2 cursor-grab active:cursor-grabbing"
            ref="trendingScrollRef">
            <div class="rounded-xl border border-zinc-700 bg-zinc-900 p-3 flex items-center gap-3 w-full max-w-[500px] snap-start hover:shadow-lg 
         transition-transform duration-300 ease-in-out transform hover:scale-105" v-for="(item, index) in trendingData"
                :key="index" :item="item">
                <img :src="item.image" alt="logo" class="w-10 h-10 rounded-full object-cover" />
                <div class="flex-1">
                    <div class="text-white font-semibold truncate">
                        {{ item.name }}
                        <span class="text-zinc-400 font-normal text-sm"> {{ item.symbol }}</span>
                    </div>
                    <div class="text-xs text-zinc-300">
                        {{ item.priceDisplay }}
                        <span :class="item.change >= 0 ? 'text-green-400' : 'text-red-400'" class="ml-1 font-semibold">
                            {{ item.change >= 0 ? '+' : '' }}{{ item.change }}%
                        </span>
                    </div>
                </div>
                <img :src="item.sparkline" class="w-14 h-6" />
            </div>
        </div>
    </section>
</template>

<script setup>
import TrendingItems from '@/composables/TrendingItems.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDragScroll } from '@/types/mouseScroll.ts'

const trendingScrollRef = ref(null)

let cleanUp
onMounted(() => {
    if (trendingScrollRef.value) {
        cleanUp = useDragScroll(trendingScrollRef.value)
    }
})

onBeforeUnmount(() => {
    if (cleanUp) cleanUp()
})
const trendingData = [
    {
        image: '/images/doge.png',
        name: 'DOGE',
        symbol: 'DJI6930',
        priceDisplay: '$0.06',
        change: 74.4,
        sparkline: '/images/spark-up.svg',
    },
    {
        image: '/images/mdt.png',
        name: 'Measurable Data',
        symbol: 'MDT',
        priceDisplay: '$0.04',
        change: 53.7,
        sparkline: '/images/spark-up.svg',
    },
    {
        image: '/images/startup.png',
        name: 'Startup',
        symbol: 'STARTUP',
        priceDisplay: '$0.03',
        change: 45.5,
        sparkline: '/images/spark-down.svg',
    },

    {
        image: '/images/startup.png',
        name: 'Startup',
        symbol: 'STARTUP',
        priceDisplay: '$0.03',
        change: 45.5,
        sparkline: '/images/spark-down.svg',
    },
    {
        image: '/images/startup.png',
        name: 'Startup',
        symbol: 'STARTUP',
        priceDisplay: '$0.03',
        change: 45.5,
        sparkline: '/images/spark-down.svg',
    }
];
</script>
