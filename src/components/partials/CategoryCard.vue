<template>
    <div class="bg-white rounded-lg shadow-md  text-center w-72 h-36 flex justify-center place-items-center box-border">
        <div class="">
            <a class="text-xl flex flex-col" href="#">
                <i class="text-black text-4xl font-semibold " :class="icon"></i> {{ title }}
            </a>
        </div>

    </div>
</template>
  
<script setup>
const { props } = defineProps(["icon", "title", 'iconColor']);



</script>
  
<style>
.border {
    border: 1px solid #e5e7eb;
}

.p-4 {
    padding: 1rem;
}

.text-2xl {
    font-size: 1.5rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.text-4xl {
    font-size: 2.25rem;
}
</style>
  