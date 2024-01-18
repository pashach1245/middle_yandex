import "./Input.less";
import Block from "../../core/Block";

type IProps = {
  name: string;
  type: string;
  label: string;
  inputError: string;
};

export class Input extends Block {
  constructor(props: IProps) {
    super(props);
  }

  render(): string {
    return `
    <div class="input">
        <label class="input__container">
            <input name={{name}} class="input__element" type={{type}} />
            <div class="input__label">{{label}}</div>
            <div class="input__error">
            <div class="input__text-error">{{inputError}}</div>
            </div>
        </label>
    </div>
        `;
  }
}
