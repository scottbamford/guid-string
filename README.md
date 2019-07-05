# guid-string
Utilities that allow us to do simple management of Guids or uuids as strings
## Installation

Install with npm:

```shell
npm install guid-string
```

Or with yarn:

```shell
yarn add guid-string
```

## Usage

### Typescript

Creating a new Guid.

```ts
import { Guid } from 'guid-string';

let id = Guid.newGuid();
```

Check if a string is a valid Guid.

```ts
import { Guid } from 'guid-string';

let valid = Guid.isGuid('...');
```

Check if a string is an empty guid ("00000000-0000-0000-0000-000000000000", "", undefined, and null are all considered empty).

```ts
import { Guid } from 'guid-string';

let isEmpty = Guid.isEmpty('...');
```

Get the constant for an empty guid ("00000000-0000-0000-0000-000000000000").

```ts
import { Guid } from 'guid-string';

let myEmptyGuid = Guid.empty;
```

### Javascript

Creating a new Guid.

```js
import { Guid } from 'guid-string';

var id = Guid.newGuid();
```

Check if a string is a valid Guid.

```js
import { Guid } from 'guid-string';

var valid = Guid.isGuid('...');
```

Check if a string is an empty guid ("00000000-0000-0000-0000-000000000000", "", undefined, and null are all considered empty).

```js
import { Guid } from 'guid-string';

var isEmpty = Guid.isEmpty('...');
```

Get the constant for an empty guid ("00000000-0000-0000-0000-000000000000").

```js
import { Guid } from 'guid-string';

var myEmptyGuid = Guid.empty;
```

## Typescript

This project is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.
