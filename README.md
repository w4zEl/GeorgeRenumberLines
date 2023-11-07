# George Renumber Lines

Tool for changing the line labels in a [George](https://student.cs.uwaterloo.ca/~se212/george/george-docs-1/index.html) proof to be consecutive.

## Usage

You can directly use the `renumberLines` function from [GeorgeRenumberLines.js](GeorgeRenumberLines.js), passing in the proof as a string as the first argument and an optional object specifying options as the second argument. This can be run inside the browser console or in Node.js.

For example:

```js
const result = renumberLines(
`a) something premise
b) something_else by rule on a`);
/* result:
1) something premise
2) something_else by rule on 1
*/
```