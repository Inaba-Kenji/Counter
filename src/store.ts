import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

interface ToDoItem {
  text: string;
  status: boolean;
  number: number;
}

export const toDoItems: Writable<ToDoItem[]> = writable([
  { text: 'new', status: true, number: 0 },
]);
