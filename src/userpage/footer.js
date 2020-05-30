import { LitElement, html, css } from 'lit-element';

export class Footer extends LitElement {
  static get styles() {
    return css`
      footer {
        position: absolute;
        margin: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-weight: bold;
        font-size: 1.1rem;
      }
    `;
  }
  render() {
    return html`<footer>
      <span>Quick Pay</span> | Stoicescu Catalin Copyright &copy; 2020 All rights reserved
    </footer>`;
  }
}
