import * as Mustache from "mustache";

export function render(template, products) {
    try {
        const output = Mustache.render(template, products);
        console.log(output);
    } catch (e) {
        console.error(e);
    }
    
}