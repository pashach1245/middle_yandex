import Block from "../../core/Block";
import "./ChatMessage.less";

type IProps = {
  type: "outgoing" | "incoming";
  message: string;
  time: string;
  isOutgoing: boolean;
  isFileAttached: boolean;
};

export class ChatMessage extends Block {
  constructor(props: IProps) {
    super(props);
  }

  render(): string {
    return `
            <div class="message message__{{type}}">
                <div class="message__{{type}}__text">
                    <span>{{message}}</span>
                </div>
                  {{#if isFileAttached}}
                    <img class="message__photo" src="assets/messagePhoto.jpg" alt="message-photo" />
                 {{/if}}
                <div class="message__info">
                    <span class="message__info__time">{{time}}</span>
                      {{#if isOutgoing}}
                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 198">
                            <line id="Line 5" y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                            <line id="Line 6" y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#3369F3"/>
                            <line id="Line 7" y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#3369F3"/>
                            </g>
                        </svg>
                    {{/if}}
                </div>
            </div>
        `;
  }
}
