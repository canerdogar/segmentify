function categoryValidator(param) {
    const isValid = "category" in param && typeof param["category"] === "string";
    !isValid && console.error("Please provide the category parameter correctly.");
    return isValid;
}

function subCategoryValidator(param) {
    const isValid = !("subCategory" in param) || typeof param["categosubCategory"] === "string";
    !isValid && console.error("Please provide the subCategory parameter correctly.");
    return isValid;
}

export { categoryValidator, subCategoryValidator }