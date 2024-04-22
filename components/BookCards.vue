<script setup>
import { useUserStore } from "../stores/UserStore";
const userStore = useUserStore();

const props = defineProps({
  book: Object
})

</script>

<template>
    <div>
        <div class="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img class="w-full h-48 object-cover" :src="book.cover_image" alt="book cover">
            <div class="px-6 py-4">
                <div class="flex items-center justify-between mb-2">
                    <div class="font-bold text-xl">{{ book.name }}</div>
                    <Favorite :bookId="book.id" :isFavorite="book.favorite" />
                </div>
                <p class="text-gray-700 text-base truncate ...">
                    {{ book.description }}
                </p>
                <div class="pt-4 pb-2">
                    <NuxtLink :to="'/books/'+book.id" :class="'hover:text-blue-400 text-blue-800'">
                        Read More
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>