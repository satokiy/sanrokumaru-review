# 360 review progress

360度評価の進捗を可視化するアプリケーションです。

# Stack
- Svelte + Typescript
- Vite
- TailwindCSS



## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

Use VScode Dev Container.



```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
