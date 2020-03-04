"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAction(type, request, response) {
    return {
        type,
        payload: {
            request,
            response
        }
    };
}
exports.createAction = createAction;
function createAsyncAction(actions, api) {
    return (apiArgs) => dispatch => {
        const [requestType, successType, errorType] = actions;
        dispatch(createAction(requestType, apiArgs, {}));
        return Promise.resolve(api(apiArgs))
            .then(response => {
            const action = createAction(successType, apiArgs, response);
            dispatch(action);
            return action;
        })
            .catch(err => {
            const action = createAction(errorType, apiArgs, err);
            Promise.reject(dispatch(action));
        });
    };
}
exports.createAsyncAction = createAsyncAction;
exports.INIT = "INIT";
exports.LOADING = "LOADING";
exports.SUCCESS = "SUCCESS";
exports.ERROR = "ERROR";
//# sourceMappingURL=actionCreator.js.map