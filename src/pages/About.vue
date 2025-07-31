<script setup>
import AboutMe from '@/component/AboutMe.vue';
import SpotifyWidget from '@/component/widget/SpotifyWidget.vue';
import LinkedInWidget from '@/component/widget/LinkedInWidget.vue';
import ApplePhotosWidget from '@/component/widget/ApplePhotoWidget.vue';
import ChatWithMe from '@/component/widget/ChatWithMe.vue';
</script>
<template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 h-200">
        <div class="col-span-1 max-w-full">
            <AboutMe />
        </div>
        <div class="grid grid-rows-[auto_auto_auto_auto] gap-1 mx-5 mt-10 ">
            <div class="row-span-1 col-span-2 md:grid-cols-2 h-100"><SpotifyWidget class="w-full h-full"/></div>
            <div class="grid grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-2 mt-5 gap-10">
                <div class="w-full"><LinkedInWidget class="w-full"/></div>
                <div class="w-full"><ApplePhotosWidget class="w-full"/></div>
            </div>
            <div class="col-span-2 row-span-1"><ChatWithMe class="w-full " /></div>
        </div>
    </div>


</template>