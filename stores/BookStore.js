import { defineStore } from "pinia";

export const useBookStore = defineStore('BookStore', () => {
// export default function useBookStore() {
    const books = ref([]);
    const book = ref({});

    const fetchBooks = async () => {
        try {
            const { data, error } = await useFetch(`http://127.0.0.1:8000/nuxt/api/get-books`);
            books.value = data;
            console.log('Data is fetched.')
        } catch (error) {
            console.log('catch error => ', error);
        }
    }

    const fetchBook = async (id) => {
        try {
            const { data, error } = await useFetch(`http://127.0.0.1:8000/nuxt/api/get-books/${id}`);
            book.value = data;
            console.log('error.value => ', error.value);
        } catch (error) {
            console.log('catch error => ', error);
        }
    }
   
    return { books, book, fetchBooks, fetchBook, favoriteBook }
})
