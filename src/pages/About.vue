<script setup>
import AboutMe from '@/component/AboutMe.vue';
import SpotifyWidget from '@/component/widget/SpotifyWidget.vue';
import LinkedInWidget from '@/component/widget/LinkedinWidget.vue';
import ApplePhotosWidget from '@/component/widget/ApplePhotoWidget.vue';
import YouTubeMusicWidget from '@/component/widget/YoutubeMusicWidget.vue';
import ChatWithMeWidget from '@/component/widget/ChatWithMeWidget.vue';
</script>
<template>
    <div class="grid grid-cols-2 gap-1 p-4 h-screen">
        <div class="md:col-span-1 max-w-full">
            <AboutMe />
        </div>
        <div class="grid grid-cols-2 gap-1 mx-10 mt-10">
            <div class=""><LinkedInWidget /></div>
            <div class=""><SpotifyWidget /></div>
            <div class=""><ApplePhotosWidget /></div>
            <div class=""><YouTubeMusicWidget /></div>
            <div class="col-span-2"><ChatWithMeWidget /></div>
        </div>
    </div>

</template>