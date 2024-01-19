import './ChatList.less';
import Block from '../../core/Block';

export class ChatList extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
        <div class="chatList">
        <div class="chatList__profile" page="ProfilePage">
            <span>Профиль</span>
            <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect width="6" height="10" fill="#E5E5E5" />
            <g
                id="&#208;&#146;&#209;&#139;&#208;&#177;&#209;&#128;&#208;&#176;&#209;&#130;&#209;&#140; &#208;&#167;&#208;&#176;&#209;&#130;"
                clip-path="url(#clip0_0_1)"
            >
                <rect
                width="1280"
                height="720"
                transform="translate(-295 -22)"
                fill="white"
                />
                <rect
                id="Rectangle 339"
                x="-295"
                y="-22"
                width="310"
                height="720"
                fill="#FBFBFB"
                />
                <g id="Group 201">
                <path id="Polygon 1" d="M1 9L5 5L1 1" stroke="#999999" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_0_1">
                <rect
                    width="1280"
                    height="720"
                    fill="white"
                    transform="translate(-295 -22)"
                />
                </clipPath>
            </defs>
            </svg>
        </div>
        {{{ ChatListInput}}}
        <div class="chatList__container">
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
            {{{ ChatListItem}}}
        </div>
        </div>`;
  }
}
