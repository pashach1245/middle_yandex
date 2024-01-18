import "./Auth.less";
import Block from "../../core/Block";

export class AuthPage extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="auth">
            {{#> FormAuth title='Вход'}}
                {{{ Input label="Логин" name="login" inputError="неверный логин" }}}
                {{{ Input label="Пароль" name="password" type="password" }}}
                {{{ Button label="Авторизоваться" type="primary" }}}
                {{{ Button label="Нет аккаунта?" type="link" page="RegistrationPage"}}}
            {{/FormAuth}}
        </div>
        `;
  }
}
