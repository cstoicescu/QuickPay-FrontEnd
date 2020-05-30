import { LitElement, html, css } from 'lit-element';
import { Header } from './header.js';
import { Dashboard } from './dashboard.js';
import { Transaction } from './transaction.js';
import { Services } from './services.js';
import { Contact } from './contact.js';
export class UserPage extends LitElement {
  static get styles() {
    return css`

      fixed-header{
        position: absolute;
        z-index:1;
      }
      #body { 
          margin: 0;
          width: 100%;
          height: 100%;
          font-family: sans-serif;
          background: rgba(200, 164, 200, 0.4);
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          position: absolute;
          top: 0%;
          left: 0;
        }
    
      }
    `;
  }

  static get properties() {
    return {
      page: { type: String },
    };
  }

  constructor() {
    super();
    window.location.hash = 'dashboard';
    this.page = window.location.hash.substring(1);
  }

  render() {
    return html`
      <fixed-header @navigate-page=${this._navigatePage}></fixed-header>
      <div id="body">
        ${this._pageTemplate}
      </div>
      <fixed-footer></fixed-footer>
    `;
  }

  get _pageTemplate() {
    if (this.page === 'dashboard') return html`<dashboard-user></dashboard-user>`;
    if (this.page === 'sendmoney') return html`<transaction-user></transaction-user>`;
    if (this.page === 'contact') return html`<contact-user></contact-user>`;
    if (this.page === 'services') return html`<service-user></service-user>`;

    return html`ERROR`;
  }

  _navigatePage(event) {
    if (event.detail != 'logout') {
      this.page = event.detail;
      window.location.hash = event.detail;
    } else if (event.detail == 'logout') {
      history.replaceState(null, null, ' ');
      this.dispatchEvent(new CustomEvent('logout', { detail: { logged: false } }));
    }
  }
}
window.customElements.define('fixed-header', Header);
window.customElements.define('dashboard-user', Dashboard);
window.customElements.define('transaction-user', Transaction);
window.customElements.define('service-user', Services);
window.customElements.define('contact-user', Contact);
