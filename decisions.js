
export function decide(state, { type, data }) {
    switch (type) {
        
        // Add new cases to handle specific command decisions
        case "DoSomething":
          return doSomething(state, data);
        
        default:
            return [];
    }
}

function doSomething(state, data) {
    return [{ type: 'SomethingHappened', data: { } }]
}