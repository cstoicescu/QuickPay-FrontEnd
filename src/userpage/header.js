import { LitElement, html, css } from 'lit-element';

export class Header extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 70%;
        margin: 0 auto;
      }
      .header {
        width: 100%;
        top: 0;
        position: fixed;
        background: rgba(137, 109, 145, 0.8);
        font-family: sans-serif;
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
      }
      .logo {
        float: left;
        color: white;
      }
      span {
        color: #63c763;
      }
      a {
        text-decoration: none;
        color: white;
      }
      li {
        list-style: none;
        float: left;
        margin-left: 15px;
        padding-top: 15px;
      }

      .nav {
        float: right;
      }
      button {
        outline: none;
        border: none;
        color: white;
        background-color: inherit;
        font-size: 16px;
        cursor: pointer;
      }
    `;
  }
  render() {
    return html`<header>
      <div class="header">
        <div class="container">
          <div class="logo">
            <h1>Quick<span>Pay</span></h1>
          </div>
          <div class="nav">
            <ul>
              <li><button @click=${this._onClick} name="dashboard">Dashboard</button></li>
              <li><button @click=${this._onClick} name="sendmoney">Send Money<button></li>
              <li><button @click=${this._onClick} name="services">Our Services</button></li>
              <li><button @click=${this._onClick} name="contact">Contact</button></li>
              <li><button @click=${this._onClick} name="logout">Log Out</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>`;
  }

  _onClick(event) {
    this.dispatchEvent(new CustomEvent('navigate-page', { detail: event.target.name }));
  }
}
