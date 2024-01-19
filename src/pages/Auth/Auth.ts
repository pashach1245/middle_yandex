import "./Auth.less";
import Block from "../../core/Block";
import * as validators from "../../utils/validators";
import { navigate } from "../../main";

export class AuthPage extends Block<{}> {
  constructor() {
    super({
      validate: {
        login: validators.login,
        password: validators.password,
      },
      onLogin: (event: Event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();

        if (!login) {
          return;
        }

        console.log({
          login,
          password,
        });
        navigate("ProfilePage");
      },
    });
  }

  render(): string {
    return `
        <div class="auth">
            {{#> FormAuth title='Вход'}}
                {{{ Input label="Логин" name="login" type="text" ref="login" validate=validate.login }}}
                {{{ Input label="Пароль" name="password" type="password" ref="password" validate=validate.password }}}
                {{{ Button label="Авторизоваться" type="primary" buttonType="submit" onClick=onLogin }}}
                {{{ Button label="Нет аккаунта?" type="link"}}}
            {{/FormAuth}}
        </div>
        `;
  }
}
