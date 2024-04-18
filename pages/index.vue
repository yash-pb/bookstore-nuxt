<script setup>
import { useBookStore } from "../stores/BookStore";

const bookStore = useBookStore();
const init = async () => {
    await bookStore.fetchBooks();
}

onBeforeMount(() => {
    init();
    console.log('in before mount after init => ', books);

})

const books = computed(() => {
    return bookStore.books.value;
});
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <NuxtLink to="/books/123" :class="'hover:text-blue-400 text-blue-800'">
            Read More
        </NuxtLink>
        <BookCards v-if="books" v-for="(book, index) in books.data" :book="book" :index="index"/>
    </div>
</template>