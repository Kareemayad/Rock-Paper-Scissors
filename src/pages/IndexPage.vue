<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <h3 class="text-center">Rock, Paper, Scissors game!</h3>
      <div class="q-gutter-md">
        <q-btn color="primary" label="Single-Player" href="/single-player" />
        <q-btn color="primary" label="Multi-Player" href="/multi-player" />
      </div>
      <img src="rules.png" height="200" width="200" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import App from "src/App.vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
