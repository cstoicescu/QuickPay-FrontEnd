import { LitElement, html, css } from 'lit-element';

export class BackButton extends LitElement {
  static get styles() {
    return css`
      button {
        position: absolute;
        margin: 0;
        top: 80%;
        left: 5%;
        font-size: 1.01rem;
        display: block;
        margin-top: 20px;
        margin-right: 20px;
        background: none;
        color: white;
        border-radius: 20px;
        background-color: rgba(233, 212, 255, 0.15);
        border: 2px solid #3498db;
        padding: 10px 30px;
        font-weight: bold;
        cursor: pointer;
        outline: none;
      }

      button:hover {
        cursor: pointer;
        border-color: #2ecc71;
      }
      button:active {
        box-shadow: 0 3px 0 #00823f;
        transform: translateY(2px);
      }
    `;
  }

  render() {
    return html`<div>
      <button @click=${this._goBack}>Go Back</button>
    </div>`;
  }

  _goBack() {
    if (window.history.back()) {
      window.history.back();
    } else console.log(this);
    this.setAttribute('disabled', '');
  }
}
