import { eventStore } from "../common/EventStore";

class ApikeyEvent {

    constructor() {
        this._name = "apikey"
    }

    get name() {
        return this._name;
    }

    validate(param) {
        return typeof param === "string";
    }

    apply() {
        
    }

}

export const apikeyEvent = new ApikeyEvent();