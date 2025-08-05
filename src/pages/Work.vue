<script setup lang="ts">
import GroceryShopWidget from '@/component/project-widget/GroceryShopWidget.vue';
import OpenNftWidget from '@/component/project-widget/OpenNftWidget.vue';

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 mx-10 h-200 gap-3">
        <div class="col-span-1 w-full">
            <OpenNftWidget />
        </div>
        <div class="col-span-1 w-full ">
            <GroceryShopWidget />
        </div>
        <router-view />
    </div>
</template>