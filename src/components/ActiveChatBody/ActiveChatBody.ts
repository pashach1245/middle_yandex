import './ActiveChatBody.less';
import Block from '../../core/Block';

export class ActiveChatBody extends Block {
  constructor() {
    const messages = [
      {
        type: 'incoming',
        message:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
        time: '11:40',
        isFileAttached: true,
        isOutgoing: false,
      },
      {
        type: 'incoming',
        message:
          'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '11:53',
        isFileAttached: false,
        isOutgoing: false,
      },
      {
        type: 'outgoing',
        message:
          'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '11:52',
        isFileAttached: false,
        isOutgoing: true,
      },
      {
        type: 'outgoing',
        message: 'круто',
        time: '11:52',
        isFileAttached: false,
        isOutgoing: true,
      },
    ];
    super({ messages });
  }

  render(): string {
    return `
        <div class="activeChatBody">
            {{#each messages}}
                {{{ChatMessage type=this.type message=this.message  isOutgoing=this.isOutgoing time=this.time isFileAttached=this.isFileAttached }}}
            {{/each}}
        </div>
        `;
  }
}
