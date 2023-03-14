
class ButtonCount extends HTMLElement {
    
    constructor() {
        this.timesClicked = 0;
        super();
        this.attachShadow({mode:'open'});
        //Attach a button that counts
        this.shadowRoot.innerHTML = '<input type="button" id="buttonClick" value="Times Clicked: 0">'
        this.targetButton = this.shadowRoot.getElementById('buttonClick');
        this.shadowRoot.getElementById('buttonClick').addEventListener('click', UpdateButton);
    }

    UpdateButton()
    {
        this.timesClicked += 1;
        targetButton.value = `Times Clicked: ${this.timesClicked}`;
    }
}

window.customElements.define('button-count', ButtonCount);
