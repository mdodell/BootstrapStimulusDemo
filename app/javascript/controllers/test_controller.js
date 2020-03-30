// Inside app/javascript/controllers/test_controller.js

import { Controller } from 'stimulus';

export default class extends Controller {

    static targets = ["foo"];

    connect(){
        console.log("I am connected!")
    }

    updateName(){
        this.fooTarget.innerHTML = "My name is bar!"
    }
}
