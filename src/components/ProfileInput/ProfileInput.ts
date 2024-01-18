import "./ProfileInput.less";
import Block from "../../core/Block";

type IProps = {
  disabled: string;
  label: string;
  name: string;
  type: string;
  value: string;
};

export class ProfileInput extends Block {
  constructor(props: IProps) {
    super(props);
  }

  render(): string {
    return `
    <div class="profileInput">
        <div>{{label}}</div>
        <input
            class="profileInput__value"
            type={{type}}
            value={{value}}
            name={{name}}
            {{disabled}}
        />
    </div>
        `;
  }
}
