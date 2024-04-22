import { defineStore } from "pinia";
import { useUserStore } from "./UserStore";

export const useBookStore = defineStore("BookStore", () => {
    const apiBaseURL = useRuntimeConfig().public.apiBaseURL;
    const books = ref([]);
    const book = ref({});
    const message = ref('');
    const messageColor = ref('');
    const userStore = useUserStore();
    const search = ref('');

    const fetchBooks = async () => {
        try {
            const { data, error } = await useFetch(`${apiBaseURL}get-books`, {
                query: { 'search': search.value },
                pick: ['data'],
                headers: {
                    'Authorization' : `Bearer ${userStore.token}`
                },
            });
            // return data;
            books.value = data
        } catch (error) {
            console.log("catch error => ", error);
        }
    };

    const fetchBook = async (id) => {
        try {
            const { data, error } = await useFetch(`${apiBaseURL}get-books/${id}`, {
                pick: ['data'],
                headers: {
                    'Authorization' : `Bearer ${userStore.token}`
                },
            });
            book.value = data;
        } catch (error) {
            console.log("catch error => ", error);
        }
    };

    const favoriteBook = async (id) => {
        try {
            message.value = '';
            messageColor.value = '';
            const { data, error } = await useFetch(`${apiBaseURL}make-fav`, {
                method: 'post',
                headers: {
                    'Authorization' : `Bearer ${userStore.token}`
                },
                body: {
                    "id": id
                }
            });
            if(data.value.status) {
                message.value = data.value.message;
                messageColor.value = data.value.color;
                return data.value.status;
            }
            return false;
        } catch (error) {
            console.log("catch error => ", error);
        }
    };

    const setSearch = (searchValue) => {
        search.value = searchValue;
        fetchBooks();
    }

    return { search, books, book, message, messageColor, fetchBooks, fetchBook, favoriteBook, setSearch };
});
