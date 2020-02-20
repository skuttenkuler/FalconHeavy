"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var routes = __importStar(require("../../routes/routes"));
var firebase_1 = require("../../firebase");
var RegisterForm = /** @class */ (function (_super) {
    __extends(RegisterForm, _super);
    function RegisterForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = __assign({}, RegisterForm.INITIAL_STATE);
        return _this;
    }
    RegisterForm.propKey = function (propertyName, value) {
        var _a;
        return _a = {}, _a[propertyName] = value, _a;
    };
    RegisterForm.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var _a = this.state, email = _a.email, password1 = _a.password1, username = _a.username;
        var history = this.props.history;
        firebase_1.auth
            .fbCreateUserWithEmailAndPassword(email, password1)
            .then(function (authUser) {
            firebase_1.db.fbCreateUser(authUser.user.uid, username, email)
                .then(function () {
                _this.setState(function () { return (__assign({}, RegisterForm.INITIAL_STATE)); });
                history.push(routes.HOME);
            })
                .catch(function (error) {
                _this.setState(RegisterForm.propKey("error", error));
            });
        })
            .catch(function (error) {
            _this.setState(RegisterForm.propKey("error", error));
        });
    };
    RegisterForm.prototype.render = function () {
        var _this = this;
        var _a = this.state, username = _a.username, email = _a.email, password1 = _a.password1, password2 = _a.password2, error = _a.error;
        var invalidInput = password1 !== password2 || password1 === "" || email === "" || username === "";
        return (<form onSubmit={function (event) { return _this.onSubmit(event); }}>
                    <input value={username} onChange={function (event) { return _this.setStateWithEvent(event, "username"); }} type="text" placeholder="Full Name"/>
                    <input value={email} onChange={function (event) { return _this.setStateWithEvent(event, "email"); }} type="text" placeholder="Email Address"/>
                    <input value={password1} onChange={function (event) { return _this.setStateWithEvent(event, "passwordOne"); }} type="password" placeholder="Password"/>
                    <input value={password2} onChange={function (event) { return _this.setStateWithEvent(event, "passwordTwo"); }} type="password" placeholder="Confirm Password"/>
                    <button disabled={invalidInput} type="submit">
                        Sign Up
                    </button>
                    {error && <p>{error.message}</p>}
                </form>);
    };
    RegisterForm.prototype.setStateWithEvent = function (event, columnType) {
        this.setState(RegisterForm.propKey(columnType, event.target.value));
    };
    RegisterForm.INITIAL_STATE = {
        email: "",
        password1: "",
        password2: "",
        username: "",
        error: null
    };
    return RegisterForm;
}(react_1.default.Component));
exports.RegisterForm = RegisterForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vY2xpZW50LyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9wYWdlcy9SZWdpc3Rlci9SZWdpc3RlckZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiwwREFBOEM7QUFDOUMsMkNBQXlDO0FBbUJ6QztJQUFrQyxnQ0FHN0I7SUFXRyxzQkFBWSxLQUFxQjtRQUFqQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUdmO1FBRkcsS0FBSSxDQUFDLEtBQUssZ0JBQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUVqRCxDQUFDO0lBUGMsb0JBQU8sR0FBdEIsVUFBdUIsWUFBb0IsRUFBRSxLQUFTOztRQUN0RCxnQkFBUSxHQUFDLFlBQVksSUFBRyxLQUFLLEtBQUU7SUFDL0IsQ0FBQztJQU1NLCtCQUFRLEdBQWYsVUFBZ0IsS0FBUztRQUF6QixpQkFvQkM7UUFuQkcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLElBQUEsZUFBMEMsRUFBekMsZ0JBQUssRUFBRSx3QkFBUyxFQUFFLHNCQUF1QixDQUFDO1FBQzFDLElBQUEsNEJBQU8sQ0FBZTtRQUU3QixlQUFJO2FBQ0MsZ0NBQWdDLENBQUMsS0FBSyxFQUFDLFNBQVMsQ0FBQzthQUNqRCxJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hCLGFBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztpQkFDbEQsSUFBSSxDQUFDO2dCQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLGNBQUssWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFqQyxDQUFpQyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMs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