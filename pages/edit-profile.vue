<script>
import { useUserStore } from "../stores/UserStore";

const useStore = useUserStore();
// const userDetails = ref({
//     "dfdf": "Dfdf"
// });

// console.log('userStore => ', userStore.user);
// userDetails.value = computed(() => {
//     // console.log('userStore.user => ', userStore.user);
//     return {
//         "full_name": userStore.user.value ? userStore.user.value.data.full_name : '',
//         "email": userStore.user.value ? userStore.user.value.data.email : '',
//         "mobile_no": userStore.user.value ? userStore.user.value.data.mobile_no : '',
//     }
// })


// console.log('useStore => ', useStore.user);

</script>
<template>
    <!-- {{ useStore.user }} -->
    <h1 class="mb-9 text-xl md:text-2xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Update Profile</h1>

    <form class="w-full" action="#">
        <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/2 px-3 mb-4 md:mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="full_name"> Full Name </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="full_name" name="full_name" type="text" placeholder="Enter full name">
        </div>
        <div class="w-full md:w-1/2 px-3 mb-4 md:mb-6">
            <div class="w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email"> Email </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" placeholder="Enter new email">
            </div>
        </div>
        </div>
        <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/2 px-3 mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="mobile_no"> Mobile Number </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mobile_no" name="mobile_no" type="number" placeholder="Enter mobile number">
        </div>
        </div>

        <div class="flex flex-wrap mt-2 md:mt-5 justify-end">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm md:text-md border-4 text-white py-1 md:py-2 px-3 md:px-5 rounded" type="submit">
            Update
        </button>
        </div>
    </form>
</template>