class GameSpace extends HTMLElement {
  static get observedAttributes() {
    return ['symbol'];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });

    const style = document.createElement('style');
    style.textContent = `
    div {
        display: flex;
        background-color: cyan;
        font-size:160px;
        height: 200px;
        justify-content: center;
        width: 200px;
      }
    `;

    const div = document.createElement('div');
    // div.addEventListener("click", (event) => {
    //   console.log("current text:", event.target.innerText);

    //   switch (event.target.innerText) {
    //     case "":
    //       event.target.innerText = "X";
    //       break;

    //     case "X":
    //       event.target.innerText = "O";
    //       break;

    //     case "O":
    //       event.target.innerText = "";
    //       break;

    //     default:
    //       event.target.innerText = "";
    //       break;
    //   }
    // });

    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attribute changed', {
      name,
      oldValue,
      newValue,
    });

    const div = this.querySelector('div');
    console.log({ div, this: this });

    switch (name) {
      case 'symbol':
        div.innerText = newValue;
        break;

      default:
        break;
    }
  }

  connectedCallback() {
    // console.log("game-space element added to page");
  }
}

customElements.define('game-space', GameSpace);
