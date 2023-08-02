<template>
  <header class="w-full max-h-44 flex flex-col" id="header-area">
    <!-- Top Headbar -->
    <div class="bg-red-600 h-24 w-full p-6">
      <div class="grid grid-cols-3">
        <div class="col-span-2 grid grid-cols-3 items-center">
          <div class="grid grid-cols-3 place-items-center">
            <div class="row-span-3">
              <i class="bx bx-phone-call text-white text-lg pl-10"></i>
            </div>
            <div class="col-span-2">
              <span class="text-white font-semibold">Contact support:</span>
            </div>
            <div class="col-span-2">
              <a href="tel:+502464674" class="text-white font-semibold">+502 464 674</a>
            </div>
          </div>
          <div class="grid grid-cols-3 items-center">
            <div class="row-span-3">
              <i class="bx bx-map text-white text-lg pl-10"></i>
            </div>
            <div class="col-span-2">
              <span class="text-white font-semibold">Our location:</span>
            </div>
            <div class="col-span-2">
              <a href="#" class="text-white font-semibold block">New York, USA</a>
            </div>
          </div>
          <div class="grid grid-cols-3 items-center">
            <div class="row-span-3">
              <i class="bx bx-envelope text-white text-lg pl-10"></i>
            </div>
            <div class="col-span-2">
              <span class="text-white font-semibold">Contact email:</span>
            </div>
            <div class="col-span-2">
              <a href="mailto:hello@edali.com" class="text-white font-semibold"
                >hello@edali.com</a
              >
            </div>
          </div>
        </div>

        <div class="col-span-1 flex items-center justify-end">
          <div class="bg-white text-red-600 justify-center flex items-center p-2 gap-4">
            <i class="bx bx-log-in icon-arrow after"></i>
            <a href="#" class="font-semibold text-xl">Login</a>
          </div>
        </div>
      </div>
    </div>
    <!-- ----------------------------------------------------------------------------
            ----------------------------------------------------------Navbar Area -->
    <div class="bg-white text-center h-20 flex items-center" id="">
      <div class="grid grid-cols-4">
        <div class="col-span-1 w-fit">
          <a href="#" class="font-bold text-3xl">Edali</a>
        </div>
        <div class="col-span-2">
          <ul class="grid grid-cols-7 gap-2">
            <li class="group relative">
              <a href="#" class="nav-link group-hover:bg-blue-600 group-hover:text-white"
                >Home</a
              >
              <ul class="hidden absolute bg-white w-48 py-2 shadow-lg">
                <li class="">
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >Online Education Portal</a
                  >
                </li>
                <li class="">
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >Online Courses &amp; Training Portal</a
                  >
                </li>
              </ul>
            </li>
            <li class="group relative">
              <a href="#" class="nav-link group-hover:bg-blue-600 group-hover:text-white"
                >About Us</a
              >
              <ul class="hidden absolute bg-white w-48 py-2 shadow-lg">
                <li class="">
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >About Us 1</a
                  >
                </li>
              </ul>
            </li>
            <!-- Add more menu items with submenus here -->
          </ul>
        </div>

        <div class="content-center flex place-content-end">
          <div class="">
            <i class="bx bx-cart-alt text-2xl"></i>
            <i class="bx bx-search text-2xl"></i>
            <i class="bx bx-menu text-2xl"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Navbar Area (if needed) -->
  </header>
</template>

<script setup>
import "boxicons/css/boxicons.min.css";
</script>

<style scoped></style>
