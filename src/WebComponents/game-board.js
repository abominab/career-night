class GameBoard extends HTMLElement {
  // static get observedAttributes() {
  //   return [''];
  // }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
    div {
        background-color: cyan;
        display: flex;
        font-size:160px;
        height: 200px;
        justify-content: center;
        width: 200px;
      }
    `;

    const div = document.createElement('div');
    div.onclick = this.getAttribute('symbol');

    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log('%c attribute changed:', 'color:cyan', {
    //   name,
    //   oldValue,
    //   newValue,
    // });

    const shadowDiv = this.shadowRoot.querySelector('div');
    console.log({
      shadowDiv,
      this: this,
    });

    switch (name) {
      case 'symbol':
        shadowDiv.innerText = newValue;
        break;

      default:
        break;
    }
  }

  connectedCallback() {
    // console.log("game-space element added to page");
  }

  firstUpdated(...args) {
    console.log('first updated', { args });
  }
}

customElements.define('game-board', GameBoard);
