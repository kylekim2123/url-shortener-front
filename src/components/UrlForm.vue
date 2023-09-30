<template>
  <b-form inline>
    <b-form-input class="w-50 ml-auto" placeholder="Enter the link here" v-model="originalUrl"></b-form-input>
    <b-button variant="outline-primary" class="mr-auto" @click="submitUrlForm">Shorten URL</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'UrlForm',
  data() {
    return {
      originalUrl: '',
    };
  },
  methods: {
    submitUrlForm() {
      this.$store.dispatch('createShortUrl', {originalUrl: this.originalUrl})
    }
  }
};
</script>

<style scoped></style>