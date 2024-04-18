<script setup lang="ts">
import { useBookStore } from "../../stores/BookStore";

const route = useRoute()
const id = route.params.id;
const bookStore = useBookStore();

const init = async () => {
    await bookStore.fetchBook(id);
}

onBeforeMount(async () => {
    init();
})

const book = computed(() => {
    return bookStore.book.value;
});
</script>
<template>
    <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row -mx-4" v-if="book">
        <div class="md:flex-1 px-4">
            <div class="mb-4">
                <img class="w-full h-[250px] lg:h-[450px] rounded object-cover" :src="book.data.cover_image" alt="book image">
            </div>
            <div class="flex mb-4">
                <div class="w-1/2 mt-3 flex flex-row md:flex-row">
                    <Favorite/>
                </div>
            </div>
        </div>
        <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ book.data.name }}</h2>
            <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {{ book.data.description }}
                </p>
            </div>
        </div>
    </div>
</div>
</template>