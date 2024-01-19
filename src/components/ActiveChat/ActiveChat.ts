import "./ActiveChat.less";
import Block from "../../core/Block";

export class ActiveChat extends Block<{}> {
  constructor() {
    super();
  }

  render(): string {
    return `
            <div class="activeChat">
                <div class="activeChat__header">
                    <div class="activeChat__header__avatar">
                    <img src="https://fakeimg.pl/34x34" alt="Avatar" />
                    <span>Name</span></div>
                    <div class="activeChat__header__menu">
                    <svg
                        width="3"
                        height="16"
                        viewBox="0 0 3 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Group 194">
                        <circle id="Ellipse 20" cx="1.5" cy="2" r="1.5" fill="#3369F3" />
                        <circle id="Ellipse 21" cx="1.5" cy="8" r="1.5" fill="#3369F3" />
                        <circle id="Ellipse 22" cx="1.5" cy="14" r="1.5" fill="#3369F3" />
                        </g>
                    </svg>
                </div>
                </div>
                {{{ ActiveChatBody}}}
                {{{ ActiveChatFooter}}}
            </div>
        `;
  }
}
