
export function evolve(state, events) {
    return events.reduce(applyEvent, state);
}

function applyEvent(state, { type, data }) {
    switch (type) {

        // Add new cases to handle evolution of state for specific events
        case "SomethingHappened":
          return applySomethingHappened(state, data);

        default:
            return state;
    }
}

function applySomethingHappened(state, data) {
    return {
        something: 1 + (state.something | 0)
    }
}