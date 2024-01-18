import Block from "../../core/Block";

interface IProps {
  type: "primary" | "link" | "error";
  label: string;
  page: string;
}

export class Button extends Block {
  constructor(props: IProps) {
    super(props);
  }

  protected render(): string {
    return `
            <button class="button button__{{type}}" page="{{page}}">
                {{label}}
            </button>
        `;
  }
}
