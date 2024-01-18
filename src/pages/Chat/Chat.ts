import "./Chat.less";
import Block from "../../core/Block";

export class ChatPage extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
    <div class="chat">
        {{{ ChatList}}}
        {{{ ActiveChat}}}
    </div>`;
  }
}
