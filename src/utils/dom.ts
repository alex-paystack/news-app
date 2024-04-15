export function getElementHeightWithMargin(element: HTMLElement) {
  const style = window.getComputedStyle(element);
  const marginTop = parseInt(style.marginTop, 10);
  const marginBottom = parseInt(style.marginBottom, 10);

  return element.offsetHeight + marginTop + marginBottom;
}
