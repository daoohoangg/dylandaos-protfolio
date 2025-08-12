<script setup>
import WeeklySales from '@/component/widget/opennftwidget/WeeklySales.vue';
import Introduction from '../component/Introduction.vue';
import PhoneGroceryShop from '@/component/widget/grocerywidget/PhoneGroceryShop.vue';
import TelegramWidgget from '@/component/widget/TelegramWidgget.vue';
import ApplePhotoWidget from '@/component/widget/ApplePhotoWidget.vue';
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 h-200 gap-x-15 w-full md:w-11/12 3xl:w-1/2 mx-auto">
        <div class="col-span-1 w-full ">
            <Introduction />
        </div>
        <div class="col-span-1 w-full mx-auto">
            <WeeklySales />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-gray-50 p-4 rounded-3xl shadow-md">
                    <PhoneGroceryShop />
                </div>
                <div class="grid grid-rows-1 md:grid-rows-2 gap-4">
                    <TelegramWidgget class="w-full h-auto" />
                    <ApplePhotoWidget class="max-w-full max-h-full object-contain" />
                </div>
            </div>
        </div>
    </div>
    
</template>