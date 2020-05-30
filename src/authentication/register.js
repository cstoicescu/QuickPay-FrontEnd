import { LitElement, html, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
export class Register extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
      }
      input {
        display: block;
        border: 0;
        background: none;
        margin: 20px auto;
        border: 2px solid #3498db;
        padding: 10px 10px;
        color: white;
        outline: none;
        border-radius: 2rem;
        width: 200px;
      }
      input:focus {
        border-color: #2ecc71;
      }
      #register {
        background: #191919;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px;
        width: 300px;
        border-radius: 0.4rem;
        text-align: center;
        box-shadow: 5px 5px 5px;
      }
      button {
        border: 0;
        background: none;
        display: block;
        margin: auto;
        border: 2px solid #2ecc71;
        padding: 8px 20px;
        outline: none;
        color: white;
        border-radius: 2rem;
        transition: 0.25s;
        cursor: pointer;
      }
      button:hover {
        background: #2ecc71;
      }
      form p {
        // color: red;
      }
    `;
  }

  static get properties() {
    return {
      submitresult: { type: String },
      styles: { type: String },
    };
  }

  constructor() {
    super();
    this.submitresult = html``;
    this.styles = { color: 'green' };
  }
  render() {
    return html`
      <form id="register" @submit=${this._onRegister} return false;>
        <h1>Sign Up</h1>
        <p style=${styleMap(this.styles)}>${this.submitresult}</p>
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          required
          minlength="3"
          maxlength="15"
        />
        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          required
          minlength="3"
          maxlength="15"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          maxlength="25"
          oninput="this.value = this.value.toLowerCase()"
        />
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          required
          maxlength="15"
          oninput="this.value = this.value.toUpperCase()"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minlength="3"
          maxlength="15"
        />
        <input type="number" name="balance" placeholder="Balance" required min="0" />
        <button>Register</button>
      </form>
    `;
  }

  async _onRegister(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd);

    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });
    this.submitresult = await response.text();
    if (!response.ok) {
      this.styles.color = 'red';
    } else {
      this.styles.color = 'green';
      await this.sleep(1300);
      window.location.assign('http://localhost:8081/index.html');
    }
    // console.log(responseText);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
