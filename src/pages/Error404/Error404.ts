import './Error404.less';
import Block from '../../core/Block';

export class Error404Page extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="error">
            <h1>404</h1>
            <span>Не туда попали</span>

            {{{ Button label="Назад к чатам" type="link" page="AuthPage" }}}
        </div>
        `;
  }
}
