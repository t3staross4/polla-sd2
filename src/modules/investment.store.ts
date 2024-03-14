import { onDestroy } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export const data = writable({ investAmount: 0, roi: 0, roi2: 0 });
