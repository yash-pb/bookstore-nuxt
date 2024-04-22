import { defineStore } from 'pinia'
import { getData, setData } from 'nuxt-storage/local-storage';

export const useUserStore = defineStore('userStore', () => {
  
    const user = ref({});
    const token = ref('');
    const errors = ref('');
    const message = ref('');
    const isLogin = ref(false);
    const apiBaseURL = useRuntimeConfig().public.apiBaseURL;

    const checkLogin = async (credentials) => {
        try {
            message.value = ''
            let { data, error, status } = await useFetch(`${apiBaseURL}login`, {
                method: 'post',       
                body: credentials
            })

            if(status.value == 'error') {
                message.value = error.value.data.message;
            } else {
                token.value = data.value.token
                isLogin.value = true
                setData('token', token.value, 1, 'd');
                await navigateTo('/')
            }

        } catch (error) {
            console.log('catch error => ', error);
        }
    }

    const fetchUser = async () => {
        let { data, error, status } = await useFetch(`${apiBaseURL}fetch-user`, {
            method: 'post',
            headers: {
                'Authorization' : `Bearer ${token.value}`
            },
            pick: ['data'],
        });

        // console.log('toRaw(data) => ', data);
        user.value = data;
    }

    const logout = async () => {
        let { data, error, status } = await useFetch(`${apiBaseURL}logout`, {
            headers: {
                'Authorization' : `Bearer ${token.value}`
            },
        })

        if(data.value.status) {
            setData('token', '', 0, 's');
            await navigateTo('/login')
            isLogin.value = false;
            token.value = null;
            user.value = {};
        }
    }

    const sessionExist = async () => {
        if(getData('token')) {
            isLogin.value = true;
            token.value = getData('token');
            await fetchUser();
        }
    }

    return {
        user,
        token,
        errors,
        message,
        isLogin,
        checkLogin,
        sessionExist,
        logout,
    }
})