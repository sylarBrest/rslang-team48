import signIn from '@services/logins/signIn';
import { updateUserData } from '@store';
import { EStatusCode } from '@constants';

const loginHandler = () => {
  const loginBtn = <HTMLButtonElement>document.querySelector('.btn-login');

  loginBtn.addEventListener('click', async () => {
    const email = (<HTMLInputElement>document.getElementById('log-email')).value;
    const password = (<HTMLInputElement>document.getElementById('log-password')).value;

    const loginResponse = await signIn(email, password);

    if (loginResponse.status === EStatusCode.OK) {
      const loginData = await loginResponse.json();

      const {
        token, refreshToken, userId, name,
      } = loginData;

      updateUserData(name, userId, token, refreshToken);

      alert(`${name} успешно вошел в систему`);
    }

    if (loginResponse.status === EStatusCode.FORBIDDEN) {
      alert('Incorrect e-mail or password');
    }
  });
};

export default loginHandler;
