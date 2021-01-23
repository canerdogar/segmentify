import * as Mustache from "mustache";

export function render(template, products, selector) {
    try {
        const replacedTemplate = template.replaceAll("[", "{").replaceAll("]", "}");
        const output = Mustache.render(replacedTemplate, {products});
        document.getElementById(selector).innerHTML = output;
    } catch (e) {
        console.error(e);
    }
    
}