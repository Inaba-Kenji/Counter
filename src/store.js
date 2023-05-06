import { writable } from 'svelte/store';

export const toDoItems = writable([{ text: 'new', status: true, number: 0 }]);
