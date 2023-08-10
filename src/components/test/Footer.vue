<template>
    <footer class="py-8 bg-black text-white">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
                <div class="px-4">
                    <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                    <ul>
                        <li class="flex items-center mb-2">
                            <i class="bx bx-map mr-2"></i>
                            <a href="#" target="_blank">2750 Quadra Street Victoria Road, New York, Canada</a>
                        </li>
                        <li class="flex items-center mb-2">
                            <i class="bx bx-phone-call mr-2"></i>
                            <a href="tel:+11234567890">+1 (123) 456 7890</a>
                        </li>
                        <li class="flex items-center">
                            <i class="bx bx-envelope mr-2"></i>
                            <a href="">hello@edali.com</a>
                        </li>
                    </ul>
                    <ul class="grid grid-cols-4 gap-0 mt-4">
                        <li class="flex">
                            <a class="" target="_blank" href="#">
                                <i class="bx bxl-twitter"></i>
                            </a>
                        </li>
                        <li class="flex justify-center">
                            <a class="" target="_blank" href="#">
                                <i class="bx bxl-facebook"></i>
                            </a>
                        </li>
                        <li class="flex justify-center">
                            <a class="" target="_blank" href="#">
                                <i class="bx bxl-instagram"></i>
                            </a>
                        </li>
                        <li class="flex justify-center">
                            <a class="" target="_blank" href="#">
                                <i class="bx bxl-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="px-4">
                    <h3 class="text-xl font-bold mb-4">Support</h3>
                    <div class="menu-support-container">
                        <ul id="menu-support" class="menu list-red-dot">
                            <li class="mb-2">
                                <a href="#">About Us</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">FAQ’s</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Events</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Gallery</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-4">
                    <h3 class="text-xl font-bold mb-4">Useful Link</h3>
                    <div class="menu" id="menu-support">
                        <ul id="menu-useful-link" class="menu list-red-rectangle">
                            <li class="mb-2">
                                <a href="#">Graphic Design</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Photography</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Web Design</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">Edali Professional</a>
                            </li>
                            <li class="mb-2">
                                <a href="#">UK Education Fair</a>
                            </li>
                            <li>
                                <a href="#">UK Education</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-4">
                    <h3 class="text-xl font-bold mb-4">Newsletter</h3>
                    <div class="newsletter-box">
                        <p>To get the latest news and latest updates from us.</p>
                        <form class="" method="post" action="" onsubmit="">
                            <label class="">Your e-mail address:</label>
                            <input type="email" class="mt-3 rounded-sm bg-black border p-1" placeholder="Enter your email"
                                name="ne" required="">
                            <button type="submit" class="p-2 bg-red-700 w-36 text-white rounded-md mt-4">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
</script>

<style scoped>
.list-red-rectangle {
    list-style-type: none;
    margin-left: .5rem;
  }

  .list-red-rectangle li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .list-red-rectangle li::before {
    content: "";
    position: absolute;
    top: 0.4rem;
    left: 0;
    width: 0.5rem;
    height: 0.3rem;
    background-color: red; /* Replace 'red' with the desired color */
  }

  .list-red-dot {
    list-style-type: none;
    margin-left: 1rem;
  }

  .list-red-dot li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .list-red-dot li::before {
    content: "•";
    position: absolute;
    top: 0;
    left: 0;
    color: red; /* Replace 'red' with the desired color */
  }
</style>
      

