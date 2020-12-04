# my\_

My opinionated version of lodash. A set of utility functions that make Typescript/Javascript life easier.

Feel free to use these if you wish. These functions are generic enough that every project may have a use for a function. However, know that I am not looking for this project to become a large community driven project at this time.

# Style of this project

- Each exposed utility function starts with an underscore `_` character.
- Each function name must start with the data type that they help with. For example: If you are building a utility function that determines if an array is empty, start the utility function with `_array`. I tend to be very verbose with my code so no abbreviation is done such as `_a` or `_arr` for array.

The naming is done this way because if we have a function named `isEmpty()`, that can be appropriate for strings, objects, arrays. Start out with `_array` to differentiate from others.

- 1 exposed function per npm module. Keeping slings as slim as possible! I try my best to make all of my projects as slim as possible with dependencies. It's ok for each module to have their own dependencies (one utility module using another utility module) but even then, keep it as slim as possible.
- Typescript support with official typings.
- Great test coverage. Because we have very isolated modules, automated unit testing is easy to write and perform.
- Each exposed function needs to be exported in a way that makes using the module a super simple import statement:

```ts
// GOOD
import _arrayIsEmpty from "@levibostian/my_arrayIsEmpty"

// BAD
import { _arrayIsEmpty } from "@levibostian/my_arrayIsEmpty"
import * as _arrayIsEmpty from "@levibostian/my_arrayIsEmpty"
```

# Development

- Getting started with development is easy.

```
npm install && npm run install
```

Then, open up the root directory of the project in VSCode (recommended for typescript support).

- Write code. Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in the [angular format](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) for your git commit messages.

- Push code up to GitHub and make a Pull request to the `master` branch. After merging, the CI server takes care of the rest.

### Requirements of this project

- Monorepo. Contain 2+ modules in 1 single source code repo.
- Typescript code base. Compile the code before publishing.
- Easy formatting, linting, and testing. Running `npm run lint` at the root will lint _all_ of the separate modules.
- Debugging of original Typescript code in VSCode. Hit breakpoints in the Typescript code.
- Each individual module have their own, separate, semantic version. This way if one module has a major version jump the other modules do not need to have the jump on them causing developer confusion and pains.

### Bonus features

- [Typescript incremental builds](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html) for faster builds during development

# Credits

- [This monorepo example](https://github.com/andrewthauer/ts-monorepo) has been outstanding. It helped me get up and running with Lerna quick and easy.
