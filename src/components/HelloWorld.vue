<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div
    class="bg-gray-500 border p-1 m-2 grid grid-cols-2 place-content-center space-x-14"
    id="header"
  >
    <div class="border w-fit">
      <div class="">
        <i class="bx bx-phone-call"></i>
        <span>Contact support</span>
        <a href="tel:+502464674%20">+502 464 674</a>
      </div>
      <div class="">
        <i class="bx bx-map"></i>
        <span>Our location</span>
        <a href="#">New York, USA</a>
      </div>
      <div class="">
        <i class="bx bx-envelope"></i>
        <span>Contact email</span>
      </div>
    </div>

    <div class="border flex place-content-center">
      <a href="https://themes.envytheme.com/edali/login" class="default-btn"
        ><i class="bx bx-log-in icon-arrow before"></i><span class="label">Login</span
        ><i class="bx bx-log-in icon-arrow after"></i
      ></a>
    </div>
  </div>
  <div></div>
</template>

<style scoped></style>
