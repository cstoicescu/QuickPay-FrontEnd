import { LitElement, html } from 'lit-element';
import { LoginForm } from './loginForm.js';
import { UserPage } from '../userpage/userpage.js';
import { write, read } from '../storage/storage.js';

export class Login extends LitElement {
  static get properties() {
    return {
      isLogged: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isLogged = false;
  }
  render() {
    return html`<main>${this._pageTemplate}</main>`;
  }

  get _pageTemplate() {
    if (!this.isLogged) return html`<login-form @logged-in=${this._loggedIn}></login-form>`;
    else return html`<user-page @logout=${this._logout}></user-page>`;
  }

  _loggedIn(event) {
    this.isLogged = true;
    const userAccess = event.detail;
    console.log(userAccess);
    write(userAccess);
  }

  async _logout(event) {
    this.isLogged = event.detail.logged;

    const userAccess = read();
    await fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userAccess),
    });
    sessionStorage.clear();
  }
}

window.customElements.define('login-form', LoginForm);
window.customElements.define('user-page', UserPage);
