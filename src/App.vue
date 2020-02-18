<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="./">SE Explorer</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0" id="accountForm">
            <input
              v-model="account"
              class="form-control mr-sm-2"
              type="text"
              placeholder="Account name"
              aria-label="Account"
            />
            <button
              class="btn btn-outline-info my-2 my-sm-0"
              @click.prevent="getAccountHistory"
              :disabled="account.length < 3"
            >Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
    };
  },
  methods: {
    getAccountHistory() {
      this.$router.push({ name: 'explorer', params: { username: this.account } });
    },
  },
};
</script>

<style lang="scss">
</style>
