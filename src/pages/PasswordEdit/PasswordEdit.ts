import "./PasswordEdit.less";
import Block from "../../core/Block";

export class PasswordEditPage extends Block {
  constructor() {
    const editPasswordData = [
      {
        label: "Старый пароль",
        value: "123",
        type: "password",
        name: "oldPassword",
      },
      {
        label: "Новый пароль",
        value: "123456",
        name: "newPassword",
        type: "password",
      },
      {
        label: "Повторите новый пароль",
        value: "123456",
        name: "newPassword",
        type: "password",
      },
    ];
    super({ editPasswordData });
  }

  render(): string {
    return `
    <div class="profile">
        {{{ LeftAside page="MainPage"}}}
        <div class="profile__content">
            <img class="profile__content__avatar" src="https://fakeimg.pl/130x130" alt="Avatar" />
            {{#> SimpleForm}}
                {{{ ProfileInput label="Старый пароль" type="password" value="123" name="oldPassword" }}}
                {{{ ProfileInput label="Новый пароль" type="password" value="123456" name="newPassword" }}}
                {{{ ProfileInput label="Повторите новый пароль" type="password" value="123456" name="newPassword" }}}
                <div class="profileEdit__button">
                    {{{ Button type="primary" label="Сохранить" page="ProfilePage"}}}
                </div>
            {{/SimpleForm}}
        </div>
    </div>
        `;
  }
}
