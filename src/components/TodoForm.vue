<template>
  <form @submit="onSubmit">
    <input type="text" v-model="title" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo({
        id: uuidv4(),
        title: this.title,
        completed: false,
      });
      this.title = "";
    },
  },
};
</script>

<style>
</style>