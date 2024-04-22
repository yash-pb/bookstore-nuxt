<script setup>
    import { useUserStore } from "../stores/UserStore";

    const userStore = useUserStore();
    userStore.logout();
</script>