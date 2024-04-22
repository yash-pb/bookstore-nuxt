<script setup>
import { useUserStore } from "../stores/UserStore";
import { useBookStore } from "../stores/BookStore";

const userStore = useUserStore();
const bookStore = useBookStore();

const init = async () => {
    await userStore.sessionExist();
}
onBeforeMount(() => {
    init();
})
</script>

<template>
  <div>
    <AppHeader />
    <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <p class="alert aler-msg text-xs text-bold text-center my-5" :class="'text-'+bookStore.messageColor+'-500'">{{ bookStore.message }}</p>
      <slot />
    </div>
  </div>
  <slot name="login" />
</template>