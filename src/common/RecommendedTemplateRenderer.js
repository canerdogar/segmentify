import * as Mustache from "mustache";

export function render(template, products) {
    var output = Mustache.render(template, products);
    console.log(output);
}