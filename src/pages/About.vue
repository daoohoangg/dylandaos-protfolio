<script setup>
import AboutMe from '@/component/AboutMe.vue';
import SpotifyWidget from '@/component/widget/SpotifyWidget.vue';
import LinkedInWidget from '@/component/widget/LinkedInWidget.vue';
import ApplePhotosWidget from '@/component/widget/ApplePhotoWidget.vue';
import ChatWithMe from '@/component/widget/ChatWithMe.vue';
</script>
<template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 h-200">
        <div class="col-span-1 max-w-full h-full">
            <AboutMe />
        </div>
        <div class="grid grid-rows-5 gap-1 mx-5 h-full mt-10 ">
            <div class="row-span-1 col-span-2 h-110"><SpotifyWidget class="h-full"/></div>
            <div class="col-span-1 md:col-span-2 "><LinkedInWidget class="h-full"/></div>
            <div class="col-span-1 md:col-span-2"><ApplePhotosWidget class="w-full h-full" /></div>
            <div class="col-span-2 row-span-1"><ChatWithMe class="w-full " /></div>
        </div>
    </div>


</template>