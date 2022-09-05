export const MIN_PASSWORD_LENGTH = 8;

export const MIN_USERNAME_LENGTH = 3;

export const MAX_USERNAME_LENGTH = 15;

export const EMAIL_REGEXP = /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/;

export const USERNAME_REGEXP = /^[a-zA-Z]{3,15}$/;

export const PASSWORD_REGEXP = /\w{8,}$/;

export enum EWrongText {
  email = 'E-mail введён некорректно',
  username = 'Имя может содержать только буквы латинского алфавита, длина от 3 до 15 символов',
  password = 'Пароль может состоять из латинских букв, цифр и знака "_" и должен содержать минимум 8 символов',
  common = 'Неправильный логин и/или пароль',
}
