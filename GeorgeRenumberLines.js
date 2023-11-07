function renumberLines(str, {start = 1, getLineNum, ignore = []} = {}) {
    const lines = {};
    let lineNum = start;
    return str.replace(/(?<=^\s*)(?<!^\/\/.*)\w+(?=\))/gm, (label) => 
        ignore.some(x => typeof x === 'function' ? x(label) : label.includes(x)) ? label : 
            lines[label] = typeof getLineNum === 'function' ? getLineNum(label) : lineNum++)
        .replace(/(?<=\bby\b\s+\b\w+\b\s+on\s+)[\w,\s-]+(?=$|\s|\/\/)/gm, m => m.replace(/\w+/g, l => lines[l] ?? l));
}