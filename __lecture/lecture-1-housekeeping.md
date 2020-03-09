# 4.2.1 React Ecosystem

---

### 🏠Housekeeping: Keys

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`.
in SomeComponent (at src/index.js:24)
in App (at src/index.js:31)
```

---

### 🏠Housekeeping: Modules

In the last lecture, we saw **default exports**

```js
const items = [
  { id: '123', text: 'item1'},
  { id: '234', text: 'item2'}
]

const Bacon = ({items})=> (
  {items.map(item => <li key={`id${item.text.replace(' ', '-')}`}>{item.text}</li>)}
);


function Button(props) {
  ✂️
}

export default Button;  // default can only add one.  acts as though you are importing the file
```

```js
import Button from '../Button';
```

---

There are also **named exports**

```js
// authentication-utils.js
export const signUp = () => { ✂️ };
export const logIn = () => { ✂️ };
export const logOut = () => { ✂️ };
```

```js
import { signUp, logIn, logOut } from '../../authentication-utils.js';

// import utils from '../../authentication-utils.js';
// utils.signUp
```

---

### A module can have:

- 0 or 1 _default_ exports,
- any number of _named_ exports, and
- both types of exports.

---

# Exercise

Are the following code snippets correct or incorrect?

Fix them, if incorrect

---

```js
// src/data.js
const data = { hi: 5 };

export default data;
```

```js
// src/index.js
import theBestData from './data';
```

---

```js
// src/data.js
export const MAGIC_NUMBER = 123;
```

```js
// src/index.js
import MAGIC_NUMBER from './data';
// above does not work.  Not defualt, need {}
import { MAGIC_NUMBER } from './data';
// or 
import default MAGIC_NUMBER from './data';
```

---

```js
// src/data.js
export const users = [];
export const sessions = [];

const data = { users, sessions };

export default data;
```

```js
// src/index.js
import {data, users} from './data';
// above is overboard.  Users does not need to be there
// change it to:
const users = [];
const sessions = [];

const data = { users, sessions };

export default data;

import {data} from './data';

// or 
export const users = [];
export const sessions = [];

import {users} from './data';

```

---

```js
// src/data.js
export default const baseball = '⚾️';

```

```js
// src/index.js
import baseball from './data';


// above does not work.  Can't define something in the same line as an export
// below does

// src/data.js
export default '⚾️';

// src/index.js
import baseball from './data';


console.log(baseball);  // will work inside function App(props) {
//
//}

```

---
