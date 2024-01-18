import Block from "../../core/Block";
import "./ChatListItem.less";

export class ChatListItem extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="chatItem">
            <div class="chatItem__img">
                <img src="https://fakeimg.pl/47x47" alt="Chat avatar" />
            </div>
            <div class="chatItem__content">
                <div class="chatItem__content__container">
                <div><span>Name</span></div>
                <div>
                    <span class="secondaryColor">10:40</span>
                </div>
                </div>
                <div class="chatItem__content__container">
                <div class="chatItem__content__bottom__message secondaryColor">Друзья, у
                    меня для вас особенный выпуск новостей!Друзья, у меня для вас особенный
                    выпуск новостей!</div>
                <div class="chatItem__content__bottom__count">4</div>
                </div>
            </div>
        </div>
    `;
  }
}
