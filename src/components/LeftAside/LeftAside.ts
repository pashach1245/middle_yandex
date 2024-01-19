import './LeftAside.less';
import Block from '../../core/Block';

export class LeftAside extends Block {
  constructor(props) {
    super(props);
  }

  render(): string {
    return `
        <div class="leftAside">
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Group 202">
                <circle
                    page={{page}}
                    id="Ellipse 36"
                    cx="14"
                    cy="14"
                    r="14"
                    transform="rotate(-180 14 14)"
                    fill="#3369F3"
                />
                <rect
                    id="Rectangle 447"
                    x="20"
                    y="14.8"
                    width="11"
                    height="1.6"
                    transform="rotate(-180 20 14.8)"
                    fill="white"
                />
                <path
                    id="Vector 1"
                    d="M13 19L9 14L13 9"
                    stroke="white"
                    stroke-width="1.6"
                />
                </g>
            </svg>
        </div>
        `;
  }
}
