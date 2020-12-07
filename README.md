[![codecov](https://codecov.io/gh/levibostian/my_/branch/master/graph/badge.svg?token=movVIKEIbv)](https://codecov.io/gh/levibostian/my_)

# my_

My version of lodash. A set of utility functions that make Typescript/Javascript life easier.

Feel free to use these if you wish. These functions are generic enough that every project may have a use for a function. However, know that I am not looking for this project to become a large community driven project at this time.

# Why another lodash?

Lodash is great. In fact, this project uses lodash sometimes! 

The problems I face are...
* **Lodash is not verbose enough** - Example: I like to use the function [`isNil`](https://lodash.com/docs/4.17.15#isNil) from lodash to find if a value is `null` or `undefined`. Well, when I use this function name, `isNil`, I always have to ask myself, "Wait. Does that also check undefined?". I am a verbose programmer and would rather have a function, `isNullOrUndefined()`, so I do not need to second guess myself anymore. 
* **Lodash doesn't include everything I need** - If I need to do something like `Date` string parsing, I need to always ask myself, "Is this a function located in Lodash or somewhere else?" I would rather just go to 1 single place and find what I need. 
* **I am always learning** - What if I write a function that checks if a given value is an Object or not (`isObject(foo)`). I write this function and use it in my projects. Well, in a few months I find a bug and realize this function does not handle a certain use case. Well, all I need to do is update this 1 package, deploy it, then all of my projects that uses this function has now fixed this potential bug if that project has experienced it yet or not. Way better then having a function that is copy/pasted into each project I then need to manually go into each of them and update each project manually by pasting the improved function. 
* **Copy/paste is bad!** - When lodash does not include something that I need, I find myself making a `util` module in my projects. Well, after years of doing that now, I am starting to realize that there is a better way! 

# Modules 

| Function name | Module name | Description | Bundle size |
| :------------ | :---------- | :---------- | :---------: |
| `_allSequential` | `@levibostian/my_allsequential` | Run array of Promises, in order, and get Array of results back. | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_allsequential) | 
| `_arrayLast` | `@levibostian/my_arraylast` | Get the last item of Array or `undefined` if empty | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_arraylast) | 
| `_dateSortNewToOld` | `@levibostian/my_datesortnewtoold` | Array [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function to sort Dates Array from new to old (newest first index). | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_datesortnewtoold) | 
| `_dateSortOldToNew` | `@levibostian/my_datesortoldtonew` | Array [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function to sort Dates Array from old to new (oldest first index). | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_datesortoldtonew) | 
| `_isEmptyOrBlank` | `@levibostian/my_isemptyorblank` | Is the value empty (Arrays, strings, Object) or blank (empty strings `""` or whitespace strings `" "`)? | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_isemptyorblank) | 
| `_isNullOrUndefined` | `@levibostian/my_isnullorundefined` | Is the value `undefined` or `null`? | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_isnullorundefined) |
| `_isObject` | `@levibostian/my_isobject` | Is value an Object? | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_isobject) | 
| `_mapAll` | `@levibostian/my_mapall` | Like [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), but your `map()` function executes against all of the properties/items of Object/Array (including nested objects and arrays). | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_mapall) | 
| `_randomInt` | `@levibostian/my_randomint` | Get a random number in a given range. >= min && <= max | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_randomint) | 
| `_sleep` | `@levibostian/my_sleep` | Pause program a number of milliseconds. | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@levibostian/my_sleep) | 

# Documentation

Check out the tests for each function you're interested in to see more details on how to use each function. 

# Style of this project

- Each exposed utility function starts with an underscore `_` character to suggest it's just a utility function. 
- Each function should be able to work with different data types, if possible. 

Example: `_isEmptyOrBlank()` to determine if a given value is empty or blank. This function can work with Arrays or strings as both of them have a `length` property. So, have the input value be of type `Array<unknown> | string` and Typescript takes care of the rest. 

Example: `_last()` to get the last item of a given value. Well, this could work with Arrays and strings but here is the problem. `<T>last(value: Array<T> | string): T | string | unknown` From this function definition, do you see that the input type and the return type is quite complex? Each time you use the function you would need to do a type check or cast. That is just annoying! Instead, we make a function `arrayLast()` and a separate function, `stringLast()`. 

- 1 exposed function per npm module. Keeping slings as slim as possible! I try my best to make all of my projects as slim as possible with dependencies. It's ok for each module to have their own dependencies (one utility module using another utility module) but even then, keep it as slim as possible.
- Typescript support with official typings.
- Great test coverage. Because we have very isolated modules, automated unit testing is easy to write and perform.
- The functions do *not* verify parameters. Example: If a function is only designed to work with Arrays, the function does *not* assert the given parameter is an Array. This is because Typescript's type system should prevent this from happening already a good deal. 
- Strict semantic versioning. Feel confident upgrading to newer versions of modules without breaking your code. (well, make sure you still write tests around your code!)
- Each function is immutable. Do not modify the given parameter. 
- Each exposed function needs to be exported in a way that makes using the module a super simple import statement:

```ts
// GOOD
import _isEmpty from "@levibostian/my_isempty"

// BAD
import { _isEmpty } from "@levibostian/my_isempty"
import * as _isEmpty from "@levibostian/my_isempty"
```

# Development

- Getting started with development is easy.

```
npm install && npm run install
```

Then, open up the root directory of the project in VSCode (recommended for typescript support).

- Write code. Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in the [angular format](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) for your git commit messages.

If you have a module that depends on another module in this project, add the module to the package.json and then run `npm run install` to run `lerna bootstrap` command to get the dependencies linked together. 

- Push code up to GitHub and make a Pull request to the `master` branch. After merging, the CI server takes care of the rest.

### Requirements of this project

- Monorepo. Contain 2+ modules in 1 single source code repo.
- Typescript code base. Compile the code before publishing.
- Easy formatting, linting, and testing. Running `npm run lint` at the root will lint _all_ of the separate modules.
- Debugging of original Typescript code in VSCode. Hit breakpoints in the Typescript code.
- Each individual module have their own, separate, semantic version. This way if one module has a major version jump the other modules do not need to have the jump on them causing developer confusion and pains.

# Credits

- [This monorepo example](https://github.com/andrewthauer/ts-monorepo) has been outstanding. It helped me get up and running with Lerna quick and easy.
