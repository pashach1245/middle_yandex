import './Registration.less';
import Block from '../../core/Block';
import * as validators from '../../utils/validators';
import { navigate } from '../../main';
import { Input } from '../../components/Input';

export class RegistrationPage extends Block {
  constructor() {
    super({
      onRegister: (event: Event) => {
        event.preventDefault();
        const email = (this.refs.email as Input).value();
        const login = (this.refs.login as Input).value();
        const firstName = (this.refs.name as Input).value();
        const secondName = (this.refs.second_name as Input).value();
        const phone = (this.refs.phone as Input).value();

        const password = (this.refs.password as Input).value();
        const passwordAgain = (this.refs.passwordAgain as Input).value();

        console.log({
          email,
          login,
          password,
          phone,
          first_name: firstName,
          second_name: secondName,
          password_again: passwordAgain,
        });

        navigate('ProfilePage');
      },
      validate: {
        login: validators.login,
        password: validators.password,
        phone: validators.phone,
        email: validators.email,
        name: validators.name,
      },
    });
  }

  render(): string {
    return `
       <div class="registration">
            {{#> FormAuth title='Регистрация'}}
                {{{ Input label="Почта" name="email" type="email" ref="email" validate=validate.email }}}
                {{{ Input label="Логин" name="login" ref="login" validate=validate.login }}}
                {{{ Input label="Имя" name="first_name" ref="name" validate=validate.name }}}
                {{{ Input label="Фамилия" name="second_name" ref="second_name" validate=validate.name }}}
                {{{ Input label="Телефон" name="phone" type="tel" ref="phone" validate=validate.phone }}}
                {{{ Input label="Пароль" name="password" type="password" ref="password" validate=validate.password }}}
                {{{ Input label="Пароль еще раз" name="password" type="password" ref="passwordAgain" validate=validate.password }}}
                {{{ Button label="Зарегистрироваться" type="primary" onClick=onRegister}}}
                {{{ Button label="Войти" type="link" page="AuthPage" }}}
            {{/FormAuth}}
        </div>
        `;
  }
}
