import './ProfileEdit.less';
import * as validators from '../../utils/validators';
import Block from '../../core/Block';
import { navigate } from '../../main';
import { Input } from '../../components';

export class ProfileEditPage extends Block {
  constructor() {
    super({
      validate: {
        login: validators.login,
        password: validators.password,
        email: validators.email,
        phone: validators.phone,
        name: validators.name,
      },
      onEdit: (event: Event) => {
        event.preventDefault();
        const email = (this.refs.email as Input).value();
        const login = (this.refs.login as Input).value();
        const firstName = (this.refs.first_name as Input).value();
        const secondName = (this.refs.second_name as Input).value();
        const displayName = (this.refs.display_name as Input).value();
        const phone = (this.refs.phone as Input).value();

        console.log({
          email,
          login,
          firstName,
          secondName,
          displayName,
          phone,
        });
        navigate('ProfilePage');
      },
    });
  }

  render(): string {
    return `
        <div class="profile">
            {{{ LeftAside page="MainPage"}}}
            <div class="profile__content">
                <img class="profile__content__avatar" src="https://fakeimg.pl/130x130" alt="Avatar" />
                {{#> SimpleForm}}
                    {{{ ProfileInput ref="email" label="Почта" type="email" validate=validate.email value="pochta@yandex.ru" name="email" }}}
                    {{{ ProfileInput ref="login" label="Логин" type="text" validate=validate.login value="ivanivanov" name="login"}}}
                    {{{ ProfileInput ref="first_name" label="Имя" type="text" validate=validate.name value="Иван" name="first_name" }}}
                    {{{ ProfileInput ref="second_name" label="Фамилия" type="text" validate=validate.name value="Иванов" name="second_name" }}}
                    {{{ ProfileInput ref="display_name" label="Имя в чате" type="text" validate=validate.name value="Иван" name="display_name" }}}
                    {{{ ProfileInput ref="phone" label="Телефон" type="tel" validate=validate.phone value="+7(909)9673030" name="phone" }}}
                    <div class="profileEdit__button">
                        {{{ Button type="primary" label="Сохранить" onClick=onEdit}}}
                    </div>
                {{/SimpleForm}}
            </div>
        </div>
        `;
  }
}
