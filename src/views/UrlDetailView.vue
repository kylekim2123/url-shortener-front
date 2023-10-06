<template>
  <div>
    <h3>Short URL is ...</h3>
    <b-form-input readonly :value="getUrl.shortUrl" class="my-4 text-center"></b-form-input>
    <div class="d-flex flex-column align-items-start">
      <p><strong>원래 URL :</strong> <a :href="getUrl.originalUrl" target="_blank">{{ getUrl.originalUrl }}</a></p>
      <p><strong>단축 시도 횟수 :</strong> {{ getUrl.shorteningCount }}회</p>
      <p><strong>단축 URL 접속 횟수 :</strong> {{ getUrl.requestCount }}회</p>
    </div>
    <div class="d-flex justify-content-end">
      <router-link :to="{ name: 'HomeView' }">이전으로</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UrlDetailView',
  props: {
    shortUrlKey: {
      type: String
    }
  },
  computed: {
    getUrl() {
      return this.$store.getters.getUrl
    }
  },
  created() {
    this.$store.dispatch('findShortUrlByKey', { shortUrlKey: this.shortUrlKey })
  }
};
</script>

<style scoped></style>