import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import {html, nothing} from 'lit'

class InputGroupPassword extends LitWithoutShadowDom{
    static properties = {
        type: {type: String, reflect: true},
        value: {type: String, reflect: true},
        InputId: {type: String, reflect: true},

        inputGroupText: {type: String, reflect: true},
        inputGroupIcon: {type: String, reflect: true},

        validFeedbackMessage: {type: String, reflect: true},
        invalidFeedbackMessage: {type: String, reflect: true},

        required: {type: Boolean, reflect: true}
    }

    constructor(){
        super()
        this._checkAvailabilityProperty()
    }

    _checkAvailabilityProperty(){
        if(!this.hasAttribute('type')){
            throw new Error(`Atribut "type" harus diterapkan pada elemen ${this.localName}`);
        }

        if(!(this.hasAttribute('inputGroupText') || this.hasAttribute('inputGroupIcon'))){
            throw new Error(
                `Salah satu dari atribut harus diterapkan pada elemen ${this.localName}: inputGroupText dan inputGroupIcon`,
            );
        }

    }

    render(){
        return html`
        <div class="input-group has-validation">
                <input 
                type="text" 
                class="form-control border-end-0" 
                id=${this.InputId||nothing} 
                type=${this.type}
                value=${this.value||nothing}
                ?required=${this.required}
                >
                <button class="input-group-text bg-white" @click=${this.showHidden}>${this.inputGroupTextTemplate()}</button>

                ${this._validFeedbackTemplate()}
                <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
            </div>
        `
    }

    showHidden(event){
        event.preventDefault()
        if(this.inputGroupIcon=='bi bi-eye-slash'){
            this.inputGroupIcon='bi bi-eye'
            this.type='text'
        }else{
            this.inputGroupIcon='bi bi-eye-slash'
            this.type='password'
        }

    }

    inputGroupTextTemplate(){
        let inputGroupIconTemplate = ''
        if(this.inputGroupIcon){
            inputGroupIconTemplate = html `<i class="bi ${this.inputGroupIcon}"></i>`
        }
        
        let inputGroupTextTemplate = ''
        if(this.inputGroupText){
            inputGroupTextTemplate = html`${this.inputGroupText}`
        }

        return html `${inputGroupIconTemplate}${inputGroupTextTemplate}`
    }

    _validFeedbackTemplate(){
        if(this.validation){
            if(this.validFeedbackMessage){
                return html `<div class="valid-feedback">${this.validFeedbackMessage}</div>`
            }
        }

        return html``
    }
}

customElements.define('input-group-password', InputGroupPassword)
