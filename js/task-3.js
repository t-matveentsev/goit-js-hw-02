'use strict';
function getElementWidth(content, padding, border) {
    const totalContent = parseFloat(content);
    const totalPadding = parseFloat(padding);
    const totalBorder = parseFloat(border);
    const totalWidth = totalContent + 2 * totalPadding + 2 * totalBorder;
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200