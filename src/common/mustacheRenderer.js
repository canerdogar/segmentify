import * as Mustache from "mustache";

function replaceAllPolyfill(string, subStr, newSubStr) {
    return string.split(subStr).join(newSubStr);
}

export function render(template, products, selector) {
    try {
        const withLeftMustache = replaceAllPolyfill(template, "[", "{");
        const replacedTemplate = replaceAllPolyfill(withLeftMustache, "]", "}");
        const output = Mustache.render(replacedTemplate, {products});
        document.querySelector(selector).innerHTML = output;
    } catch (e) {
        console.error(e);
    }
    
}

