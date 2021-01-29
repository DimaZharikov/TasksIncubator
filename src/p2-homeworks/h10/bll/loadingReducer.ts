type loadingACType = {
    type: 'LOADING-CHANGE'
    payload: {loading:boolean}
}
export type HW10State = {
    loading: boolean
}

const initState: HW10State = {
    loading: false
};

export const loadingReducer = (state = initState, action: loadingACType): HW10State => { // fix any
    switch (action.type) {
        case "LOADING-CHANGE": {
            return {...state,...action.payload}
        }
        default:
            return state;
    }
};

export const loadingAC = (loading:boolean): loadingACType => {
    return {
        type: 'LOADING-CHANGE',
        payload: {loading}
    }
};