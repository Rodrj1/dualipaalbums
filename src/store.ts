import { writable, type Writable } from 'svelte/store';

export let userClicked: Writable<boolean> = writable(false);
