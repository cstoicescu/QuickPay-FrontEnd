import { LitElement, html, css } from 'lit-element';

export class Contact extends LitElement {
  static get styles() {
    return css`
      div {
        position: absolute;
        background: rgba(158, 158, 158, 0.3);
        top: 20%;
        left: 15%;
        width: 70%;
        height: 65%;
        border-radius: 24px;
      }

      form {
        position: relative;
        top: 10%;
        left: 2%;
      }
    `;
  }
  render() {
    return html`<div>
      <form action="mailto: support@quickpay.com" method="post" enctype="text/plain">
        <label>Name:</label>
        <p>
          <input type="text" name="name" required />
        </p>

        <label>E-mail:</label>
        <p>
          <input type="text" name="mail" required />
        </p>

        <label>Comment</label>
        <p>
          <textarea rows="5" cols="50" name="description" required> </textarea>
        </p>
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" />
      </form>
    </div>`;
  }
}
