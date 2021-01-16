class EventStore {

    constructor() {
        this.store = new Map();
    }

    register(event) {
        this.store.set(event.name, event);
    }

    getEvent(name) {
        return this.store.get(name);
    }

}

export const eventStore = new EventStore();