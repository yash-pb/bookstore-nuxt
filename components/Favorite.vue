<script setup>
import { useBookStore } from "../../stores/BookStore";
const bookStore = useBookStore();

const props = defineProps({
  bookId: Number,
  isFavorite: Boolean
})

const favorite = ref(props.isFavorite);

const toggleFavorite = async (e) => {
    let response = await bookStore.favoriteBook(e.target.getAttribute('data-id'));
    if(response) {
        favorite.value = !favorite.value;
    }
}
</script>
<template>
    <div>
        <i class="fa-heart h-7 w-7 text-red-500 cursor-pointer" :class="[favorite ? 'fa-solid' : 'fa-regular']" :data-id="bookId" @click="toggleFavorite"></i>                          
    </div>
</template>