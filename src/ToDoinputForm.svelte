<script lang="ts">
  import { toDoItems } from "./store";

  let newItem: string = "new";
  let count: number = 0;
  let total: number = 0;
  let texts: string = "";

  $: {
    total = $toDoItems.reduce((acc, item) => acc + item.number, 0);
  }

  $: {
    texts = $toDoItems.reduce((acc, item) => acc + item.text + ", ", "");
    texts = texts.slice(0, -2);
	}

  function addToList() {
    $toDoItems = [...$toDoItems, {text: newItem, status: false, number: count}]
  }
</script>

<div class="newCounter">
  <button class= "max-w-sm bg-green-400 rounded text-white" on:click={addToList}>new counter</button>
</div>
<p>title list:{texts}</p>
<p>sum of count: {total}</p>

<style>
  .newCounter {
    text-align: center;
  }
  .max-w-sm {
    width: 24rem;
  }
  .bg-green-400 {
    --bg-opacity: 1;
    background-color: #68d391;
    background-color: rgba(104,211,145,var(--bg-opacity));
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .text-white {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--text-opacity));
  }
</style>
