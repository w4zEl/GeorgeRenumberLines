// ==UserScript==
// @name         George Renumber Lines
// @namespace    https://github.com/w4zEl
// @version      0.1
// @description  Provides a shortcut to renumber lines to be consecutive in Ask George.
// @author       Proximity Trigger
// @match        https://student.cs.uwaterloo.ca/~se212/george/ask-george*
// @match        https://student.cs.uwaterloo.ca/~se212/george/boole*
// @require      https://raw.githubusercontent.com/w4zEl/GeorgeRenumberLines/master/GeorgeRenumberLines.js
// @grant        none
// ==/UserScript==

!function() {
    'use strict';
    const editor = ace.edit(document.querySelector('#Editor') ? 'Editor' : 'ace-editor');
    editor.commands.addCommand({
        name: 'Renumber',
        bindKey: {win: 'Ctrl-Q', mac: 'Command-Q'},
        exec() {
            editor.session.replace(editor.selection.getRange(), renumberLines(editor.getSelectedText()));
        },
        readOnly: false
    });
}();
