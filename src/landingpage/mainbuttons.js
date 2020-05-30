import { LitElement, html, css } from 'lit-element';

export class MainButtons extends LitElement {
  static get styles() {
    return css`
      button {
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
        border-color: #2ecc71;
      }
    `;
  }
  render() {
    return html`
      <div>
        <button @click=${this._goLogin}>Login</button>
        <button @click=${this._goRegister}>Sign Up</button>
      </div>
    `;
  }

  _goLogin() {
    location.href = '/login.html';
  }
  _goRegister() {
    location.href = '/signup.html';
  }
}
