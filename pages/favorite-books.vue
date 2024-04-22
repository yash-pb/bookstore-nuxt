<script setup>

import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();

const favBooks = ref([]);

favBooks.value = computed(() => {
    return userStore.user.value ? userStore.user.value.data.favorite_books : [];
})

console.log('favBooks => ', favBooks);
</script>

<template>
    <!-- {{ favBooks }} -->
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <BookCards v-if="userStore.user.value" v-for="(book, index) in userStore.user.value.data.favorite_books" :book="book.book_details" :index="index"/>
    </div>
</template>