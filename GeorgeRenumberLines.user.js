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

~function() {
    'use strict';
    const editor = ace.edit(document.querySelector('.ace_editor'));
    editor.commands.addCommand({
        name: 'Renumber',
        bindKey: {win: 'Ctrl-Q', mac: 'Command-Q'},
        exec() {
            editor.session.replace(editor.selection.getRange(), renumberLines(editor.getSelectedText(), JSON.parse(localStorage.GeorgeRenumberLinesOptions ?? '{}')));
        },
        readOnly: false
    });
    editor.commands.addCommand({
        name: 'Renumber with options',
        bindKey: {win: 'Ctrl-Shift-Q', mac: 'Command-Shift-Q'},
        exec() {
            let start = prompt('Enter the starting line number', '1');
            if (start === null) return;
            start = +start;
            let ignore = prompt('Enter a comma separated array of strings to ignore labels containing those (default: none)');
            if (ignore === null) return;
            ignore = ignore ? ignore.split(',') : [];
            if (confirm('Save settings for the future?')) localStorage.GeorgeRenumberLinesOptions = JSON.stringify({start, ignore});
            editor.session.replace(editor.selection.getRange(), renumberLines(editor.getSelectedText(), {start, ignore}));
        },
        readOnly: false
    });
}();
