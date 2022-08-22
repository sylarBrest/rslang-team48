import signIn from '@services/logins/signIn';
import createUser from '@services/users/createUser';
import updateUserData from '@store/userData/updateUserData';
import { EStatusCode } from '@types';

const regHandler = () => {
  const regBtn = <HTMLButtonElement>document.querySelector('.btn-registration');

  regBtn.addEventListener('click', async () => {
    const username = (<HTMLInputElement>document.querySelector('#reg-name')).value;
    const email = (<HTMLInputElement>document.querySelector('#reg-email')).value;
    const password = (<HTMLInputElement>document.querySelector('#reg-password')).value;

    const response = await createUser(username, email, password);

    if (response.status === EStatusCode.OK) {
      const loginResponse = await signIn(email, password);
      const loginData = await loginResponse.json();

      const {
        token, refreshToken, userId, name,
      } = loginData;

      updateUserData(name, token, refreshToken, userId);

      alert(`${name} успешно зарегистрирован`);
    }

    if (response.status === EStatusCode.UNPROCESSABLE_ENTITY) {
      alert('Incorrect e-mail or password');
    }
  });
};

export default regHandler;
