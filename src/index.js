// import { Login } from './loginOUTDATED.js';
import { Register } from './authentication/register.js';
import { BackButton } from './landingpage/backbutton.js';
import { WelcomeMessage } from './landingpage/welcome.js';
import { Footer } from './userpage/footer.js';

//Test
import { Login } from './authentication/login.js';

// window.customElements.define('login-user', Login);
window.customElements.define('register-user', Register);
window.customElements.define('back-button', BackButton);
window.customElements.define('welcome-message', WelcomeMessage);
window.customElements.define('fixed-footer', Footer);

//Test
window.customElements.define('login-user', Login);
