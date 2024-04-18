<script setup>
import { useBookStore } from "../../stores/BookStore";
const bookStore = useBookStore();

const props = defineProps({
  bookId: Number,
  isFavorite: Boolean
})

// const faorite = isFavorite;
const favorite = ref(props.isFavorite);

const toggleFavorite = (e) => {
    favorite.value = !favorite.value;
}
</script>
<template>
    <div>
        <i class="fa-heart h-7 w-7 text-red-500 cursor-pointer" :class="[favorite ? 'fa-solid' : 'fa-regular']" :data-id="bookId" @click="toggleFavorite"></i>                          
    </div>
</template>