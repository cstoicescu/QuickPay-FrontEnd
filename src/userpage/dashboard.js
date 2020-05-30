import { LitElement, html, css } from 'lit-element';
import { read } from '../storage/storage.js';

export class Dashboard extends LitElement {
  static get properties() {
    return {
      userData: { Object },
    };
  }

  constructor() {
    super();
    this.userData = null;
    this.getUser();
  }
  static get styles() {
    return css`
      #container {
        margin: 0;
        font-family: sans-serif;
        position: absolute;
        background: rgba(158, 158, 158, 0.3);
        top: 20%;
        left: 15%;
        width: 70%;
        height: 65%;
        border-radius: 24px;
      }

      #user-info {
        position: relative;
        height: fit-content;
        width: 100%;
      }
      h1 {
        text-align: center;
        font-size: 1.4rem;
      }
      p,
      h3 {
        position: relative;
        left: 15px;
      }

      #transactions {
        position: relative;
        width: 100%;
        height: fit-content;
      }
      #info {
        font-weight: bold;
        font-size: 1.05rem;
      }
      h2 {
        text-align: center;
      }
      ol > p {
        font-style: italic;
      }
      #received {
        background: #63c763;
        border-radius: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      #sent {
        background: rgba(240, 52, 52, 1);
        border-radius: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    `;
  }

  render() {
    return html` <div id="container">
      <div id="user-info">
        <h1>Welcome back, ${this.userData.firstName} ${this.userData.lastName}</h1>
        <p id="info">Info:</p>
        <p>Account Number: ${this.userData.accountNumber}</p>
        <p>Balance: ${this.userData.balance}</p>
      </div>
      <div id="transactions">
        <h2>Transactions</h2>
        <h3>Received</h3>
        <ol id="received">
          ${this.userData.transactionReceived.length == 0
            ? html`<p>Empty</p>`
            : Object.values(this.userData.transactionReceived).map(
                transaction =>
                  html`
                    <li>
                      Received From: ${transaction.sendingAccount.accountNumber} | Date:
                      ${transaction.date} | Amount: ${transaction.amount} |
                      Description:${transaction.description}
                    </li>
                  `
              )}
        </ol>
        <h3>Sent</h3>
        <ol id="sent">
          ${this.userData.transactionSent.length == 0
            ? html`<p>Empty</p>`
            : Object.values(this.userData.transactionSent).map(
                transaction =>
                  html`
                    <li>
                      Sent to: ${transaction.receivingAccount.accountNumber} | Date:
                      ${transaction.date} | Amount: ${transaction.amount} |
                      Description:${transaction.description}
                    </li>
                  `
              )}
        </ol>
      </div>
    </div>`;
  }

  async getUser() {
    const userAccess = read();
    const response = await fetch(
      `http://localhost:8080/profile/${userAccess.username}?accessToken=${userAccess.accessToken}`
    );
    this.userData = await response.json();
    console.log(this.userData);
  }
}
