import "./ProfileEdit.less";
import Block from "../../core/Block";

export class ProfileEditPage extends Block {
  constructor() {
    const profileDatas = [
      {
        label: "Почта",
        value: "pochta@yandex.ru",
        type: "email",
        name: "email",
      },
      {
        label: "Логин",
        value: "ivanivanov",
        name: "login",
        type: "text",
      },
      {
        label: "Имя",
        value: "Иван",
        name: "first_name",
        type: "text",
      },
      {
        label: "Фамилия",
        value: "Иванов",
        name: "second_name",
        type: "text",
      },
      {
        label: "Имя в чате",
        value: "Иван",
        name: "display_name",
        type: "text",
      },
      {
        label: "Телефон",
        value: "+7(909)9673030",
        type: "tel",
        name: "phone",
      },
    ];
    super({ profileDatas });
  }

  render(): string {
    return `
        <div class="profile">
            {{{ LeftAside page="MainPage"}}}
            <div class="profile__content">
                <img class="profile__content__avatar" src="https://fakeimg.pl/130x130" alt="Avatar" />
                {{#> SimpleForm}}
                     {{#each profileDatas}}
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
