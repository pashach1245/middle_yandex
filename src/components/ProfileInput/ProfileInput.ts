import './ProfileInput.less';
import Block from '../../core/Block';

type IProps = {
  disabled: any;
  label: string;
  name: string;
  type: string;
  value: string;
  onBlur: () => void;
};

export class ProfileInput extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    if (!this.validate()) {
      return null;
    }
    return (this.refs.input.element as HTMLInputElement).value;
  }

  private validate() {
    const { value } = this.refs.input.element as HTMLInputElement;
    const error = this.props.validate?.(value);

    if (error) {
      this.refs.errorLine.setProps({ inputError: error });
      return false;
    }

    this.refs.errorLine.setProps({ inputError: '' });
    return true;
  }

  render(): string {
    return `
    <div class="profileInput">
        <div>{{label}}</div>
        {{{CommonInput name=name type=type ref="input" classname="profileInput__value" disabled=disabled value=value onBlur=onBlur}}}
        <div class="input__error profileInput__input__error">
          {{{ErrorLine inputError=inputError ref="errorLine"}}}
        </div>
    </div>
        `;
  }
}
