import './Profile.less';
import Block from '../../core/Block';

export class ProfilePage extends Block {
  constructor() {
    const profileDatas = [
      {
        label: 'Почта',
        value: 'pochta@yandex.ru',
        type: 'email',
        name: 'email',
      },
      {
        label: 'Логин',
        value: 'ivanivanov',
        name: 'login',
        type: 'text',
      },
      {
        label: 'Имя',
        value: 'Иван',
        name: 'first_name',
        type: 'text',
      },
      {
        label: 'Фамилия',
        value: 'Иванов',
        name: 'second_name',
        type: 'text',
      },
      {
        label: 'Имя в чате',
        value: 'Иван',
        name: 'display_name',
        type: 'text',
      },
      {
        label: 'Телефон',
        value: '+7(909)9673030',
        type: 'tel',
        name: 'phone',
      },
    ];
    super({ profileDatas });
  }

  render(): string {
    return `
    <div class="profile">
        {{{ LeftAside page="MainPage"}}}
        <div class="profile__content">
            <div class="profile__content__avatar"></div>
            <span class="profile__content__name">Name</span>
            {{#> SimpleForm}}
                {{#each profileDatas}}
                {{{ ProfileInput label=this.label type=this.type value=this.value name=this.name disabled="disabled"}}}
                {{/each}}
                <div class="profile__content__buttons">
                    <div class="profile__content__buttons__change">
                        {{{ Button label="Изменить данные" type="link" page="ProfileEditPage" }}}
                    </div>
                    <div class="profile__content__buttons__change">
                        {{{ Button label="Изменить пароль" type="link" page="PasswordEditPage" }}}
                    </div>
                    <div class="profile__content__buttons__logout">
                        {{{ Button label="Выйти" type="error" page="" }}}
                    </div>
                </div>
            {{/SimpleForm}}
        </div>
    </div>
        `;
  }
}
