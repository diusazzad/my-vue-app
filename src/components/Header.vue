<template>
  <header class="w-full h-auto">
    <!-- top header -->
    <div class="" id="top-header">
      <div class="" id="container">
        <div class="">
          <div class="lg:w-6/12">
            <ul
              class="sm:text-xs sm:items-center sm:p-2 sm:grid sm:grid-cols-3 text-white font-bold"
            >
              <li class="flex items-center gap-1">
                <i class="bx bx-phone-call"></i>
                <span class="sm:hidden">Contact support</span>
                <a href="tel:+502464674%20" class="">+502 464 674</a>
              </li>
              <li class="flex items-center gap-1">
                <i class="bx bx-map"></i>
                <span class="sm:hidden">Our location</span>
                <a href="#" class="block md:inline">New York, USA</a>
              </li>
              <li class="flex items-center gap-1">
                <i class="bx bx-envelope"></i>
                <span class="sm:hidden">Contact email</span>
                <a href="mailto:hello@edali.com" class="">hello@edali.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Navbar Area -->
    <div class="navbar-area bg-white lg:bg-transparent lg:p-0 p-4" id="navbarArea">
      <div class="lg:block">
        <div class="container sm:grid sm:grid-cols-3">
          <div class="col-span-2">
            <a href="">
              <h2>Edali</h2>
            </a>
          </div>
          <div class=" flex justify-end items-center gap-2">
            <i class="bx bx-cart-alt"></i>
            <i class="bx bx-search"></i>
            <i class='bx bx-menu'></i>
          </div>

        </div>
      </div>
    </div>

    <!-- End Navbar Area -->

    <!-- Start Sticky Navbar Area -->

    <!-- End Sticky Navbar Area -->
  </header>
</template>

<script setup>
import "boxicons/css/boxicons.min.css";
</script>

<style scoped>
#top-header {
  background-color: #ff1949;
}
</style>
