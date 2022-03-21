/** @param style {CSSStyleDeclaration} */
export const css = (style) =>
    Object.entries(style)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")
        .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
