const initialState = {value: ""};

const accessToken = (state = initialState, action) =>{
    switch (action.type) {
        case "dataAccessToken":
            return {...state, value: action.payload};
        default:
            return state;
    }
}

export default accessToken;