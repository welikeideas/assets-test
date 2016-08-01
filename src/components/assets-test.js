/**
 * Initialises the component when passed an element
 *
 * @param {HTMLNode} rootElement The component dom node
 */
export default function (rootElement) {
  if (!rootElement) {
    return;
  }

  console.log('Component detected', rootElement);
  console.log('Start by adding some code to src/components/assets-test.js');
}