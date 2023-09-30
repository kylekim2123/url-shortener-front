<template>
  <div>
    <h3>Shorten Your URL !</h3>
    <UrlForm class="mt-4" />
  </div>
</template>

<script>
import UrlForm from '@/components/UrlForm.vue'

export default {
  name: 'HomeView',
  components: {
    UrlForm,
  },
};
</script>

<style scoped></style>