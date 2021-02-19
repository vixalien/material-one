# material-one

A package to provide all @material/react-components in one ~~click~~ **import**.

### install

```bash
npm i material-one
```

### usage

```js
// commonjs
const Material = require('material-one')
const { Button } = require('material-one')

// esm
import Material from 'material-one'
import { Button } from 'material-one'

// Then Use it
<Material.Button text="hello"/>
<Button text="hello"/>
```

To learn material components, visit [material's catalog](https://material-components.github.io/material-components-web-catalog) or [material's github page](https://github.com/material-components/material-components-react/)

> Note that React Material has been deprecated (but it still works, works better than all the alternate solutions in fact!). So use this package at your own risks.

## contributions

are welcome.

## license

The MIT License (MIT)
Copyright © 2021 vixalien

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.