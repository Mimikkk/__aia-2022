/**
 * @param tag {string} - The tag name of the element to create.
 * @param props {object=} - optional tag properties.
 * @return {HTMLElement} */
export const create = (tag, props = {}) =>
  Object.assign(document.createElement(tag), {
    className: props.class,
    ...props,
  });
