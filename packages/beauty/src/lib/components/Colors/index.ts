import { LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { colors } from '../../tokens/colors';

export const ColorsSelector = 'ds-colors';

const colorsCssClass =
  Object.entries(colors).reduce((acc, [colorName, colorValue]) => {
    if (typeof colorValue === 'string') {
      return `${acc} --ds-color--${colorName}: ${colorValue};`;
    }
    const colorCssClass = Object.entries(colorValue).reduce(
      (acc, [colorShade, colorHex]) => {
        return `${acc} --ds-color--${colorName}-${colorShade}: ${colorHex};`;
      },
      ''
    );

    return `${acc} ${colorCssClass}`;
  }, ':root {') + '}';

@customElement(ColorsSelector)
export class Colors extends LitElement {
  @state()
  styleTag: HTMLStyleElement | null = null;

  override connectedCallback() {
    super.connectedCallback();
    this.styleTag = document.createElement('style');
    this.styleTag.appendChild(document.createTextNode(colorsCssClass));
    document.body.appendChild(this.styleTag);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.styleTag?.remove();
  }

  override render() {
    return null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ColorsSelector]: Colors;
  }
}
