import { createRoot } from "react-dom/client";
import { Info } from "./info";
import { act } from "react-dom/test-utils";

function render(Component) {
  const domNode = document.createElement('div');
  document.body.append(domNode);
  const root = createRoot(domNode);
  act(() => root.render(Component));
}

describe('Info', () => {
  it('renders game over text', () => {
    
    render(<Info />);

    console.log(document.body.outerHTML)

    expect(document.body.textContent).toContain('Game Over')
  })
})
