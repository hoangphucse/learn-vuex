<template>
  <p class="progress-bar">Progress: {{ progress }}</p>
</template>

<script>
export default {
  name: "ProgressBar",
  computed: {
    progress() {
      const state = this.$store.state;
      const percentProgress = Math.round(
        (state.todos.filter((todo) => todo.completed).length /
          state.todos.length) *
          100
      );
      return percentProgress;
    },
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