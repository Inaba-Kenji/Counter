<script lang="ts">
  import ToDoInputForm from "./ToDoinputForm.svelte";
  import ToDoList from "./ToDoList.svelte";
</script>

<div class="text-center">
  <h1 class="text-6xl">Multiple Counter</h1>
  <ToDoList />
  <ToDoInputForm/>
</div>

<style>
  .text-center {
    text-align: center;
  }
  .text-6xl {
    font-size: 4rem;
  }
  h1 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }
</style>
