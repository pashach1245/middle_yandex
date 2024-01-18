import "./Error500.less";
import Block from "../../core/Block";

export class Error500Page extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="error">
            <h1>500</h1>
            <span>Мы уже фиксим</span>

            {{{ Button label="Назад к чатам" type="link" page="AuthPage" }}}
        </div>
        `;
  }
}
