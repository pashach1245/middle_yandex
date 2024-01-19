import './Input.less';
import Block from '../../core/Block';

type IProps = {
  name: string;
  type: string;
  label: string;
  inputError: string;
  onBlur: () => void;
};

export class Input extends Block {
  constructor(props: IProps) {
    console.log(props, 'props');
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    if (!this.validate()) {
      return null;
    }
    return this.refs.input.element.value;
  }

  private validate() {
    const { value } = this.refs.input.element;
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
    <div class="input">
        <label class="input__container">
            {{{CommonInput name=name type=type onBlur=onBlur ref="input" classname="input__element" }}}
            <div class="input__label">{{label}}</div>
            <div class="input__error">
            {{{ErrorLine inputError=inputError ref="errorLine"}}}
            </div>
        </label>
    </div>
        `;
  }
}
