import "./ProfileEdit.less";
import Block from "../../core/Block";

export class ProfileEditPage extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="profile">
            {{{ LeftAside page="MainPage"}}}
            <div class="profile__content">
                <img class="profile__content__avatar" src="https://fakeimg.pl/130x130" alt="Avatar" />
                {{#> SimpleForm}}
                    {{{ ProfileInput label="Почта" type="email" value="pochta@yandex.ru" name="email" }}}
                    {{{ ProfileInput label="Логин" type="text" value="ivanivanov" name="login"}}}
                    {{{ ProfileInput label="Имя" type="text" value="Иван" name="first_name" }}}
                    {{{ ProfileInput label="Фамилия" type="text" value="Иванов" name="second_name" }}}
                    {{{ ProfileInput label="Имя в чате" type="text" value="Иван" name="display_name" }}}
                    {{{ ProfileInput label="Телефон" type="tel" value="+7(909)9673030" name="phone" }}}
                    <div class="profileEdit__button">
                        {{{ Button type="primary" label="Сохранить" page="ProfilePage"}}}
                    </div>
                {{/SimpleForm}}
            </div>
        </div>
        `;
  }
}
