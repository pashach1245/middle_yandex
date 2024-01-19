import Block from '../../core/Block';

interface IProps {
  name: string;
  type: string;
  // className: string;
  value?: string;
  disabled?: string;
  onBlur: () => void;
}

export class CommonInput extends Block {
  constructor(props: IProps) {
    console.log(props, 'props');
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const { disabled, value } = this.props;
    return `
            <input class={{classname}} ${disabled ? 'disabled' : ''} ${
  value ? `value=${value}` : ''
} name={{name}} type={{type}}" ref="input" />
        `;
  }
}
