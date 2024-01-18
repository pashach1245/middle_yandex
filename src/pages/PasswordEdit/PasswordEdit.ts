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
                {{#each editPasswordData}}
                {{{ ProfileInput label=this.label type=this.type value=this.value name=this.name disabled=false}}}
                {{/each}}
                <div class="profileEdit__button">
                    {{{ Button type="primary" label="Сохранить" page="ProfilePage"}}}
                </div>
            {{/SimpleForm}}
        </div>
    </div>
        `;
  }
}
