/**
 * @typedef NodeElement
 * @type {string | number | undefined | HTMLElement | (() => NodeElement)}
 * */

/**
 * @param parent {HTMLElement | undefined}
 * @param children {NodeElement | NodeElement[]}
 * */
export const addChild = (parent, children) => {
  if (!parent || (!children && children !== 0)) return;

  switch (typeof children) {
    case "string":
    case "number":
      return parent.appendChild(document.createTextNode(`${children}`));
    case "function":
      return parent.appendChild(children());
    case "object":
      switch (true) {
        case children instanceof Array:
          return children.forEach((child) => addChild(parent, child));
        case children instanceof HTMLElement:
          return parent.appendChild(children);
        default:
          throw Error(`Unknown child instance ${children}`);
      }
    default:
      throw Error(`Unknown child type ${children}`);
  }
};
/**
 * @param parent {HTMLElement | undefined}
 * @param children {NodeElement | NodeElement[]}
 * */
export const add = (parent, ...children) => {
  if (!parent || !children) return;

  if (typeof parent === "function") parent = parent();

  children.reduce((parent, child) => {
    if (!parent || !child) return;

    switch (typeof child) {
      case "function":
        const child_ = child();
        addChild(parent, child_);
        return child_;
      default:
        addChild(parent, child);
        return child;
    }
  }, parent);
  return parent;
};
