<template>
    <div class="mt-5 bg-cover bg-no-repeat bg-center h-96 relative" :style="{ backgroundImage: `url(${imageA})` }">
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white">
                <div class="flex items-center text-xl text-white">
                    <a class="" href="">Home</a>
                    <i class='bx bx-chevron-right'></i>
                    <strong class="">Courses Category 3</strong>
                </div>
                <div class="text-center">
                    <h2 class="text-white text-4xl font-bold">Courses Category 3</h2>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup>
import imageA from "../assets/img/imageA.jpg";
</script>

<style scoped></style>
