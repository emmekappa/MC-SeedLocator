# cb3-finder reversing guide

## Steps
1. Extract the inlineWorker variable declared on `cb3-finder.XXX.js` and write the variable content to a new file (i.e. `inline-worker-original.mjs`) 
2. Replace the code that read the wasm file 



### 1. Extract the inline_worker variable to a new file and append code to write it to a file

```js
var inlineWorker_k9bk8 = new Blob([...
  ```
 
append the writing 
  ```js  
import * as fs from 'fs';

const content = await inlineWorker_k9bk8.text();
fs.writeFileSync("inline_worker.js", content);
```

### 2. Replace the code that read the wasm file 

Copy the original worker file to a new file.
Place at the beginning of the file
```js
const wasmbin = readFileSync("./chunky.wasm");
```

Find code like
```js
var _ = c(3279).Z();
if ("function" == typeof importScripts) {
  var ab = new WebAssembly.Module(_), bb = new WebAssembly.Instance(ab, q);
  p = bb.exports, a.exports.__wasm = p
}
```

Replace with
```js
var ab = new WebAssembly.Module(wasmbin), bb = new WebAssembly.Instance(ab, q);
p = bb.exports, a.exports.__wasm = p
```

### 3. Cleanup additional code that rely on addListener

Starting from 
```js
var jsonStableStringify = function () {
```

you don't need that code to run on NodeJS environment so you can remove it. and use the code on `locator.mjs`.
