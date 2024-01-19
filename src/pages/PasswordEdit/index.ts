import Handlebars from 'handlebars';

export { PasswordEditPage } from './PasswordEdit';

Handlebars.registerHelper('editPasswordData', () => [
  {
    label: 'Старый пароль',
    value: '123',
    type: 'password',
    name: 'oldPassword',
  },
  {
    label: 'Новый пароль',
    value: '123456',
    name: 'newPassword',
    type: 'password',
  },
  {
    label: 'Повторите новый пароль',
    value: '123456',
    name: 'newPassword',
    type: 'password',
  },
]);
