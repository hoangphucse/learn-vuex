<template>
  <p class="progress-bar" v-if="isAuthenticated">Progress: {{ progress }}</p>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "ProgressBar",
  computed: {
    ...mapGetters(["progress", "isAuthenticated"]),
    ...mapState(["auth"]),
  },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>