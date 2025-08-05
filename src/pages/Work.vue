<script setup lang="ts">
import GroceryShopWidget from '@/component/project-widget/GroceryShopWidget.vue';
import NoteBookWidget from '@/component/project-widget/NoteBookWidget.vue';
import OpenNftWidget from '@/component/project-widget/OpenNftWidget.vue';
import WeddingInvitationWidget from '@/component/project-widget/WeddingInvitationWidget.vue';

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 mx-10 h-200 gap-5">
        <div class="col-span-1 w-full">
            <OpenNftWidget />
        </div>
        <div class="col-span-1 w-full ">
            <GroceryShopWidget />
        </div>
        <div class="col-span-1 w-full ">
            <NoteBookWidget />
        </div>
        <div class="col-span-1 w-full ">
            <WeddingInvitationWidget />
        </div>
        <router-view />
    </div>
</template>