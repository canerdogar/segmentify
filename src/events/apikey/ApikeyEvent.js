import { eventStore } from "../../common/EventStore";
import { configManager } from "../../common/ConfigManager";

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

    apply(param) {
        configManager.setApikey(param);
    }

}

export const apikeyEvent = new ApikeyEvent();