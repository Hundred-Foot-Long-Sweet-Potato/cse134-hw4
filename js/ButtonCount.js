let timesClicked = 0;
let targetButton;
function UpdateButton()
{
    timesClicked += 1;
    targetButton.value = `Times Clicked: ${timesClicked}`;
}

class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        //Attach a button that counts
        this.shadowRoot.innerHTML = '<input type="button" id="buttonClick" value="Times Clicked: 0">'
        targetButton = this.shadowRoot.getElementById('buttonClick');
        this.shadowRoot.getElementById('buttonClick').addEventListener('click', UpdateButton);
    }
}

window.customElements.define('button-count', ButtonCount);
