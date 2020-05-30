import { LitElement, html, css } from 'lit-element';

export class Services extends LitElement {
  static get styles() {
    return css`
      div {
        font-family: sans-serif;
        position: absolute;
        background: rgba(158, 158, 158, 0.3);
        top: 20%;
        left: 15%;
        width: 70%;
        height: 65%;
        border-radius: 24px;
      }
      h1,
      p {
        position: relative;
        left: 2%;
        top: 10%;
      }
      p {
        position: relative;
        top: 15%;
        text-indent: 20px;
      }
    `;
  }
  render() {
    return html`<div>
      <h1>About Us</h1>
      <p>
        QuickPay is the safer, easier way to pay and get paid online. The service allows almost
        anyone to pay online without sharing their full financial information with the sellers.
      </p>
    </div>`;
  }
}
