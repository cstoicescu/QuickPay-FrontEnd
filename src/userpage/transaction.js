import { LitElement, html, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { read } from '../storage/storage.js';
export class Transaction extends LitElement {
  static get styles() {
    return css`
      #container {
        font-family: sans-serif;
        position: absolute;
        background: rgba(158, 158, 158, 0.3);
        top: 20%;
        left: 15%;
        width: 70%;
        height: 65%;
        border-radius: 24px;
      }

      #title {
        position: relative;
        top: 5%;
      }

      #form {
        position: relative;
        top: 10%;
      }
      #transaction {
        margin-left: 5%;
        display: flex;
        flex-direction: column;
      }
      label,
      input {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      input {
        width: 150px;
      }
      h1 {
        text-align: center;
      }
      button {
        width: 80px;
        position: relative;
        left: 40%;
        top: 90%;
        margin: 0;
        text-align: center;
        font-size: 1.01rem;
        display: block;
        margin-top: 20px;
        margin-right: 20px;
        background: none;
        color: black;
        border-radius: 20px;
        background-color: rgba(233, 212, 255, 0.15);
        border: 2px solid #3498db;
        padding: 8px 15px;
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

      p {
        position: relative;
        left: 40%;
      }
    `;
  }

  static get properties() {
    return {
      transactionResponse: { type: String },
      styles: { type: String },
    };
  }

  constructor() {
    super();
    this.transactionResponse = html``;
    this.styles = { color: 'green' };
  }

  render() {
    return html`<div id="container">
      <div id="title">
        <h1>New Transaction</h1>
      </div>

      <div id="form">
        <form id="transaction" @submit=${this._onSubmit} return false;>
          <label> Account Number: &nbsp; </label>
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            required
            maxlength="15"
            oninput="this.value = this.value.toUpperCase()"
          />

          <label> Amount: &nbsp;</label>
          <input type="number" name="amount" placeholder="Amount" required min="1" />

          <label> Description: &nbsp;</label>
          <input
            type="text"
            name="description"
            ,
            placeholder="Description"
            required
            maxlength="35"
          />
          <button>Send</button>
        </form>
        <p style=${styleMap(this.styles)}>
          ${this.transactionResponse}
        </p>
      </div>
    </div>`;
  }

  async _onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd);
    const userAccess = read();
    const response = await fetch('http://localhost:8080/transaction/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: data.amount,
        description: data.description,
        sendingUsername: userAccess.username,
        receivingAccountNumber: data.accountNumber,
        accessToken: userAccess.accessToken,
      }),
    });
    if (response.ok) {
      // this.event.target.reset(); problema aici
      console.log(event.target);
      this.transactionResponse = html`Transaction Succesful`;
      this.styles.color = 'green';
    } else {
      this.styles.color = 'red';
      this.transactionResponse = await response.text();
    }
  }
}
