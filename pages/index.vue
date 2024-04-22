<script setup>
import { useBookStore } from "../stores/BookStore";

const bookStore = useBookStore();
const books = ref([]);


const init = async () => {
    await bookStore.fetchBooks();
}
onBeforeMount(() => {
    init();
})

books.value = computed(() => {
    return bookStore.books.value;
})

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <BookCards v-if="books.value" v-for="(book, index) in books.value.data" :book="book" :index="index"/>
    </div>
</template>