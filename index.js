import '/node_modules/@polymer/polymer/polymer.js';
import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';

const html = String.raw;
const htmlTemplate = html`
    <h1>Hello Pol</h1>
    <span on-tap="raiseEvent">tap me</span>  

`;

export class MyApp extends GestureEventListeners(PolymerElement) {
    static get template() {
        return htmlTemplate;
    }

    raiseEvent(){
        console.log('raising event');
        console.log('result', 
            this.dispatchEvent(new CustomEvent('touch-me'), { bubbles:true, composed:true})
        );
    }
}

customElements.define('my-app', MyApp);