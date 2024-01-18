import "./ChatListInput.less";
import Block from "../../core/Block";

export class ChatListInput extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="chatListInput">
            <input class="chatListInput__field" type="text" placeholder="Поиск" />
        </div>
    `;
  }
}
