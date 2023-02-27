# chime-binding

Chime plugin for bidirectional data-binding between elements and Variable objects. Still in beta.


## Installation

```sh
npm i chime-binding
```


## Usage

Reactive form example.

```js
import { Element, use } from 'chime'
import binding, { Variable } from 'chime-binding'

use('attribute', binding) // Overload the default attribute plugin.


function App() {
    const username = new Variable('Alice')
    
    return Element('div')
        .Element('input')
            .attribute('value', username) // Bind value to username.
            .end()
        .Element('h1')
            .attribute('innerText', username) // Bind innerText to username.
            .top()
}
```
