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
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubmit = function (event) {
            event.preventDefault();
            var _a = _this.state, email = _a.email, password = _a.password;
            var history = _this.props.history;
            firebase_1.auth
                .fbSignInWithEmailAndPassword(email, password)
                .then(function () {
                _this.setState(function () { return (__assign({}, LoginForm.INITIAL_STATE)); });
                history.push(routes.HOME);
            })
                .catch(function (error) {
                _this.setState(LoginForm.propKey("error", error));
            });
        };
        _this.state = __assign({}, LoginForm.INITIAL_STATE);
        return _this;
    }
    LoginForm.propKey = function (propertyName, value) {
        var _a;
        return _a = {}, _a[propertyName] = value, _a;
    };
    LoginForm.prototype.render = function () {
        var _this = this;
        var _a = this.state, email = _a.email, password = _a.password, error = _a.error;
        var InvalidInput = email === "" || email === "";
        return (<form onSubmit={function (event) { return _this.onSubmit(event); }}>
                    <input value={email} onChange={function (event) { return _this.setStateWithEvent(event, "email"); }} type="text" placeholder="Email..."/>
                    <input value={password} onChange={function (event) { return _this.setStateWithEvent(event, "password"); }} type="password" placeholder="Password..."/>
                    <button disabled={InvalidInput} type="submit">
                        Log In
                    </button>
                    {error && <p>error.message</p>}
                </form>);
    };
    LoginForm.prototype.setStateWithEvent = function (event, columnType) {
        this.setState(LoginForm.propKey(columnType, event.target.value));
    };
    LoginForm.INITIAL_STATE = {
        email: "",
        password: "",
        error: null
    };
    return LoginForm;
}(react_1.default.Component));
exports.LoginForm = LoginForm;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vY2xpZW50LyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9wYWdlcy9Mb2dpbi9Mb2dpbkZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiwwREFBOEM7QUFDOUMsMkNBQXNDO0FBZXRDO0lBQStCLDZCQUNJO0lBUzNCLG1CQUFZLEtBQXFCO1FBQWpDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBRWY7UUFFTSxjQUFRLEdBQUcsVUFBQyxLQUFTO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqQixJQUFBLGdCQUFnQyxFQUE5QixnQkFBSyxFQUFFLHNCQUF1QixDQUFDO1lBQy9CLElBQUEsNkJBQU8sQ0FBZ0I7WUFFL0IsZUFBSTtpQkFDQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2lCQUM3QyxJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFNLE9BQUEsY0FBTSxTQUFTLENBQUMsYUFBYSxFQUFHLEVBQWhDLENBQWdDLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1FBakJFLEtBQUksQ0FBQyxLQUFLLGdCQUFRLFNBQVMsQ0FBQyxhQUFhLENBQUUsQ0FBQzs7SUFDaEQsQ0FBQztJQU5jLGlCQUFPLEdBQXRCLFVBQXVCLFlBQW9CLEVBQUUsS0FBVTs7UUFDbkQsZ0JBQVEsR0FBQyxZQUFZLElBQUcsS0FBSyxLQUFFO0lBQ25DLENBQUM7SUFxQk0sMEJBQU0sR0FBYjtRQUFBLGlCQWVFO1FBZFEsSUFBQSxlQUF1QyxFQUFyQyxnQkFBSyxFQUFFLHNCQUFRLEVBQUUsZ0JBQW9CLENBQUM7UUFDOUMsSUFBTSxZQUFZLEdBQUcsS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO1FBRWxELE9BQU0sQ0FFRixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FDMUM7b0JBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUNsSDtvQkFBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQy9IO29CQUFBLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ3pDOztvQkFDSixFQUFFLE1BQU0sQ0FDUjtvQkFBQSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQ2xDO2dCQUFBLEVBQUUsSUFBSSxDQUFDLENBQ1YsQ0FBQztJQUNMLENBQUM7SUFDTyxxQ0FBaUIsR0FBekIsVUFBMEIsS0FBVSxFQUFFLFVBQWtCO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUcsS0FBSyxDQUFDLE1BQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUE5Q2EsdUJBQWEsR0FBRztRQUMzQixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBMkNOLGdCQUFDO0NBQUEsQUFqREwsQ0FBK0IsZUFBSyxDQUFDLFNBQVMsR0FpRHpDO0FBakRRLDhCQUFTO0FBaURqQixDQUFDIn0=