import Block from "../../core/Block";
import "./Button.less";

interface IProps {
  type: "primary" | "link" | "error";
  label: string;
  page: string;
  onClick?: () => void;
}

export class Button extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  protected render(): string {
    return `
            <button class="button button__{{type}}" type="{{buttonType}}" page="{{page}}">
                {{label}}
            </button>
        `;
  }
}
