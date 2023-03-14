let timesClicked = 0;

function UpdateButton()
{
    timesClicked++;
    document.getElementById('buttonClick').value = `Times Clicked: ${timesClicked}`;
}

class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        //Attach a button that counts
        this.shadowRoot.innerHTML = '<input type="button" id="buttonClick" value="Times Clicked: 0">'
        document.getElementById('buttonClick').addEventListener('click', UpdateButton);
    }
}

window.customElements.define('button-count', ButtonCount);
