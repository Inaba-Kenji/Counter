<script>
  import { toDoItems} from "./store";

  // xのボタン
  function removeFromList(index) {
    $toDoItems.splice(index, 1)
    $toDoItems = $toDoItems
  }
  // +のボタン
  function increment(index) {
    $toDoItems[index].number += 1
  }
  // -のボタン
  function decrement(index) {
    if ($toDoItems[index].number > 0) {
      $toDoItems[index].number -= 1
    }
  }
  // 0のボタン
  function reset(index) {
    $toDoItems[index].number = 0
  }
</script>

{#each $toDoItems as item, index}
  <div class="max-w-sm rounded border-solide bg-gray-100 shadow-lg m-auto flex relative items-center">
    <input class="text-gray-600 mx-4 px-1 w-32" type="text" value="{item.text}">
    <span class="text-lg font-bold px-4 absolute centerize">{item.number}</span>
    <div class="ml-auto flex">
      <button class="btn bg-red-500 rounded-l" on:click={() => increment(index)}>+</button>
      <button class="btn bg-blue-500" on:click={() => decrement(index)}>-</button>
      <button class="btn bg-yellow-500 rounded-r" on:click={() => reset(index)}>0</button>
      <button class="btn text-gray-500 cursor-pointer px-4" on:click={() => removeFromList(index)}>x</button>
    </div>
  </div>
{/each}

<style>
  .btn {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--text-opacity));
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.125rem;
  }
  .bg-red-500 {
    --bg-opacity: 1;
    background-color: #f56565;
    background-color: rgba(245,101,101,var(--bg-opacity));
  }
  .bg-blue-500 {
    --bg-opacity: 1;
    background-color: #4299e1;
    background-color: rgba(66,153,225,var(--bg-opacity));
  }
  .bg-yellow-500 {
    --bg-opacity: 1;
    background-color: #ecc94b;
    background-color: rgba(236,201,75,var(--bg-opacity));
  }
  .text-gray-500 {
    --text-opacity: 1;
    color: rgba(160,174,192,var(--text-opacity));
    border: none;
  }
  .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  }
  .relative {
    position: relative;
  }
  .max-w-sm {
    max-width: 24rem;
}
  .m-auto {
    margin: auto;
  }
  .items-center {
    align-items: center;
  }
  .flex {
    display: flex;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .bg-gray-100 {
    --bg-opacity: 1;
    background-color: rgba(247,250,252,var(--bg-opacity));
  }
  .w-32 {
    width: 8rem;
  }
  .text-gray-600 {
    border-width:0;
    --text-opacity: 1;
    color: rgba(113,128,150,var(--text-opacity));
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .mx-4 {
    margin: 0.5rem;
  }
  .centerize {
    left: 50%;
    transform: translateX(-50%);
  }
  .absolute {
      position: absolute;
  }
  .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
  }
  .text-lg {
      font-size: 1.125rem;
  }
  .font-bold {
      font-weight: 700;
  }
  .ml-auto {
    margin-left: auto;
  }
</style>
