import './Main.less';
import Block from '../../core/Block';

export class MainPage extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <nav class="main__container">
            <ul>
                <li>{{{ Button label="Страница профиля" type="link" page="ProfilePage" }}}</li>
                <li>{{{ Button label="Страница авторизации" type="link" page="AuthPage" }}}</li>
                <li>{{{ Button label="Страница регистрации" type="link" page="RegistrationPage" }}}</li>
                <li>{{{ Button label="Страница списка чатов" type="link" page="ChatPage" }}}</li>
                <li>{{{ Button label="Ошибка 404" type="link" page="Error404" }}}</li>
                <li>{{{ Button label="Ошибка 500" type="link" page="Error500" }}}</li>
            </ul>
        </nav>
        `;
  }
}
