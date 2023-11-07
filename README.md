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

You can also install the userscript that updates the [Ask George](https://student.cs.uwaterloo.ca/~se212/george/ask-george/) interface. This can be done by installing a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) and then installing [GeorgeRenumberLines.user.js](https://github.com/w4zEl/GeorgeRenumberLines/raw/master/GeorgeRenumberLines.user.js) (just click the link to be prompted to install).

After installation, when you select a proof in Ask George and press Ctrl + Q (or Command + Q), that proof will be renumbered.
