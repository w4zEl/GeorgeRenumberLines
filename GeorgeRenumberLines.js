/**
 * @param str {string} - The proof to renumber.
 * @param options {object} - The options object to customize behavior. If not specified, default values will be used for all options.
 * @param options.start {number} - The number to start renumbering from. Default is 1.
 * @param options.getLineNum {function} - A function that takes a label and returns the line number to use for that label. Default is to increment the line number for each label.
 * @param options.ignore {(string|function)[]} - An array of strings or functions representing labels to ignore (i.e. not renumber). If any label contains one of the strings in the array, it is ignored. If any of the functions returns true when passed a label as an argument, that label is ignored.
 * @returns {string} The proof with the labels renumbered.
 */
function renumberLines(str, {start = 1, getLineNum, ignore = []} = {}) {
    const lines = {};
    let lineNum = start;
    return str.replace(/(?<=^\s*)\w+(?=\))/gm, (label) => 
        ignore.some(x => typeof x === 'function' ? x(label) : label.includes(x)) ? label : 
            lines[label] = typeof getLineNum === 'function' ? getLineNum(label) : lineNum++)
        .replace(/(?<=\bby\b\s+\b\w+\b\s+on\s+)[\w,\s-]+(?=$|\s|\/\/)/gm, m => m.replace(/\w+/g, l => lines[l] ?? l));
}
