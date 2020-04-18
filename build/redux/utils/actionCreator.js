"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAction(type, request, response) {
    return {
        type: type,
        payload: {
            request: request,
            response: response
        }
    };
}
exports.createAction = createAction;
function createAsyncAction(actions, api) {
    return function (apiArgs) { return function (dispatch) {
        var requestType = actions[0], successType = actions[1], errorType = actions[2];
        dispatch(createAction(requestType, apiArgs, {}));
        return Promise.resolve(api(apiArgs))
            .then(function (response) {
            var action = createAction(successType, apiArgs, response);
            dispatch(action);
            return action;
        })
            .catch(function (err) {
            var action = createAction(errorType, apiArgs, err);
            Promise.reject(dispatch(action));
        });
    }; };
}
exports.createAsyncAction = createAsyncAction;
exports.INIT = "INIT";
exports.LOADING = "LOADING";
exports.SUCCESS = "SUCCESS";
exports.ERROR = "ERROR";
//# sourceMappingURL=actionCreator.js.map