/**@param element {HTMLElement} */
export const clear = (element) => {
  while (element.firstChild) element.removeChild(element.firstChild);
  return element;
};
