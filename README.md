# chime-binding

Chime plugin for bidirectional data-binding between elements and Variable objects.


## Installation

```sh
npm i chime-binding
```


## Usage

Reactive form example.

```js
import { Element, use } from 'chime'
import binding, { Variable } from 'chime-binding'

use('binding', binding) // Load the plugin.


function App() {
    const username = new Variable('Alice')
    
    return Element('div')
        .Element('input')
            .binding('value', username) // Bind value to username.
            .end()
        .Element('h1')
            .binding('innerText', username) // Bind innerText to username.
            .top()
}
```
