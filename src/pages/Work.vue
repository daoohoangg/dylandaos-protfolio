<script setup lang="ts">
import GroceryShopWidget from '@/component/project-widget/GroceryShopWidget.vue';
import OpenNftWidget from '@/component/project-widget/OpenNftWidget.vue';

</script>

<template>
    <div class="grid grid-rows-[auto_auto_auto_auto] gap-1 mx-5 mt-10 ">
        <div class="grid grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-2 mt-5 gap-10">
            <div class="w-full flex justify-end"><OpenNftWidget class="w-full"/></div>
            <div class="w-full"><GroceryShopWidget class="w-full"/></div>
        </div>
    </div>
</template>