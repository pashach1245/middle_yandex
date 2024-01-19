import "./ProfileInput.less";
import Block from "../../core/Block";

type IProps = {
  disabled: any;
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
        {{{CommonInput name=name type=type ref="input" classname="profileInput__value" disabled=disabled value=value }}}
    </div>
        `;
  }
}
