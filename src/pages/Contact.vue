<script setup lang="ts">
import ChatWithMe from '@/component/widget/ChatWithMe.vue';
import ContactWidget from '@/component/widget/ContactWidget.vue';
</script>
<template>
    <div class="grid grid-cols-1 gap-1 p-1 h-[100px]">
        <div class="col-span-1 max-w-full h-full flex items-center justify-center">
            <ChatWithMe />
        </div>
        <div class="col-span-1 md:col-span-2 "><ContactWidget class="h-full"/></div>
        <!-- <div class="col-span-1 md:col-span-2"><ApplePhotosWidget class="w-full h-full" /></div> -->
    </div>
    
</template>