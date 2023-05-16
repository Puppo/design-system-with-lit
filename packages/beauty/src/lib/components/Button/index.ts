import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export const ButtonSelector = 'ds-button';

@customElement(ButtonSelector)
export class Button extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .ds-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1.5;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    .ds-button--small {
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    }

    .ds-button--large {
      font-size: 1.25rem;
      padding: 0.75rem 1.5rem;
    }

    .ds-button--primary {
      background-color: var(--ds-color--primary-200);
      color: var(--ds-color--white);
    }

    .ds-button--primary:hover {
      background-color: var(--ds-color--primary-300);
    }

    .ds-button--secondary {
      background-color: var(--ds-color--secondary-500);
      color: var(--ds-color--white);
    }

    .ds-button--secondary:hover {
      background-color: var(--ds-color--secondary-600);
    }

    .ds-button--tertiary {
      background-color: var(--ds-color--tertiary-200);
      color: var(--ds-color--black);
      border: 1px solid var(--ds-color--tertiary-300);
    }

    .ds-button--tertiary:hover {
      background-color: var(--ds-color--tertiary-300);
    }
  `;

  @property()
  type: 'button' | 'submit' | 'reset' = 'button';

  @property()
  size: 'small' | 'medium' | 'large' = 'medium';

  @property()
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  private _handleClick(event: MouseEvent) {
    console.log('Hello, from click of my button!');
    event.stopPropagation();

    this.dispatchEvent(new CustomEvent('click'));
  }

  private _handleMouseover() {
    this.dispatchEvent(new CustomEvent('customover'));
  }

  override render() {
    return html`<button
      .type=${this.type}
      class=${classMap({
        'ds-button': true,
        [`ds-button--${this.size}`]: true,
        [`ds-button--${this.variant}`]: true,
      })}
      @click="${this._handleClick}"
      @mouseover="${this._handleMouseover}"
    >
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ButtonSelector]: Button;
  }
}
