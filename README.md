# Browserify-Shim-Bug readme

Steps to replicate the bug:

1. fork/download this repository
2. run `npm install`
3. run `gulp --open`

You will see a message that says "typeahead **IS** defined in jQuery.fn". It displays this message if `jQuery.fn.typeahead` returns a function in the `src/_scripts/main.js` file.

4. Use ctrl+c to stop the command prompt task runner
5. open the package.json file in the root folder
6. change `"//exports": "global:jQuery"` to `"exports": "global:jQuery"` (equivalent of uncommenting it)
7. run `gulp --open` again

You will see a message that says "typeahead is **NOT** defined in jQuery.fn". This of coarse is displayed when `jQuery.fn.typeahead` returns `undefined` from the main.js file.
