
<template>
    <div class="pt-16 pb-20 ">
        <div class="flex justify-center">
            <div class="grid grid-cols-4 gap-5">
                <CategoryCard icon="bx bx-shape-triangle" title="Technology" iconColor="text-red-600" />
                <CategoryCard icon="bx bx-font-family" title="Language" />
                <CategoryCard icon="bx bxs-drink" title="Science" />
                <CategoryCard icon="bx bx-first-aid" title="Health" />
                <CategoryCard icon="bx bx-code-alt" title="Humanities" />
                <CategoryCard icon="bx bx-briefcase-alt-2" title="Business" />
                <CategoryCard icon="bx bx-book-reader" title="Math" />
                <CategoryCard icon="bx bx-target-lock" title="Marketing" />
            </div>

        </div>

    </div>
</template>
      
<script setup>
import CategoryCard from './partials/CategoryCard.vue';
</script>
      
<style scoped></style>
      
