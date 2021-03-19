import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const FETCH_SMURF_ADD = "FETCH_SMURF_ADD";
export const FETCH_SMURF_ADD_ERROR = "FETCH_SMURF_ADD_ERROR";

export const getSmurfs = () => (dispatch) => {
    dispatch(fetchSmurfStart());
    axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch(fetchSmurfSuccess(res.data));
            console.log("fetch success", res);
        })
        .catch((error) => {
            dispatch(fetchSmurfFail(error));
            console.log("fetch error", error);
        });
};

export const addSmurfs = (smurf) => (dispatch) => {
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then((res) => {
            dispatch(fetchSmurfAdd(smurf));
            console.log("add success", res);
        })
        .catch((error) => {
            dispatch(fetchSmurfAddError(error));
            console.log("add error", error);
        });
};

export const fetchSmurfStart = () => {
    return { type: FETCH_SMURF_START };
};

export const fetchSmurfSuccess = (res) => {
    return { type: FETCH_SMURF_SUCCESS, payload: res };
};

export const fetchSmurfFail = (error) => {
    return { type: FETCH_SMURF_FAIL, payload: error.response };
};

export const fetchSmurfAdd = (smurf) => {
    return { type: FETCH_SMURF_ADD, payload: smurf };
};

export const fetchSmurfAddError = (error) => {
    return { type: FETCH_SMURF_ADD_ERROR, payload: error };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
