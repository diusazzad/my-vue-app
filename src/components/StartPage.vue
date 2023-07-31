<template>
  <div class="bg-contain bg-no-repeat h-72" :style="{ backgroundImage: `url(${imageA})` }">

    <ul class=" grid pt-16 pl-9">
      <div class=" flex items-center">
        <li class="item-home"><a class="" href="" title="Home">Home</a></li>
        <i class='bx bx-chevron-right'></i>
        <li class="">Courses Category 3</li>

      </div>
      <div class="">
        <li class=""><strong class=""> Courses Category 3</strong></li>
      </div>
    </ul>


  </div>
</template>

<script setup>
import imageA from "../assets/img/imageA.jpg";
</script>

<style scoped></style>
