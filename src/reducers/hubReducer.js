
const hubReducer = (state = [], action) => {
    switch (action.type) {
        case 'HUB_LIST': return state; break;
        case 'SINGLE_HUB': return state; break;
        case 'SAMPLE_SOCKET': return state; break;
        default: return state;
    }
}

export default hubReducer