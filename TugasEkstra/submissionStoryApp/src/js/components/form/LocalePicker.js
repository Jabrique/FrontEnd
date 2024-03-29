import {html, LitElement, css} from 'lit'
import { allLocales } from "../../../generated/locale-codes";
import { getLocale, localeNames, setLocaleFromUrl } from "../../localization";

import {updateWhenLocaleChanges} from '@lit/localize'

class LocalePicker extends LitElement{
    constructor(){
        super()
        updateWhenLocaleChanges(this)
    }

    static styles=css`
    select{
        padding: 10px;
        border-radius: 8px;
    }
    `

    render(){
        return html`
        <select @change=${this._localeChanged}>
        ${allLocales.map((locale)=>{
            return html`
            <option value=${locale} ?selected=${locale === getLocale()}>
            ${localeNames[locale]}
            </option>
            `
        })}
        </select>
        `
    }

    _localeChanged(event){
        const newLocale = event.target.value
        
        if(newLocale!==getLocale){
            const url = new URL(window.location.href)
            url.searchParams.set('lang', newLocale)

            window.history.pushState(null, '', url.toString())
            setLocaleFromUrl()
        }
    }
}

customElements.define('locale-picker', LocalePicker)