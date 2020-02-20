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
var react_router_dom_1 = require("react-router-dom");
var firebase_1 = require("./firebase");
var routes = __importStar(require("./routes/routes"));
var Authentication_1 = require("./firebase/Authentication");
var Home_1 = require("./pages/Home/Home");
var Login_1 = require("./pages/Login/Login");
var Register_1 = require("./pages/Register/Register");
var ForgotPassword_1 = require("./pages/ForgotPassword/ForgotPassword");
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            authUser: null
        };
        return _this;
    }
    AppComponent.prototype.componentDidMount = function () {
        var _this = this;
        firebase_1.firebase.auth.onAuthStateChanged(function (authUser) {
            authUser
                ? _this.setState(function () { return ({ authUser: authUser }); })
                : _this.setState(function () { return ({ authUser: null }); });
        });
    };
    AppComponent.prototype.render = function () {
        return (<react_router_dom_1.BrowserRouter>
        <div>
          <react_router_dom_1.Switch>
            <react_router_dom_1.Route exact path={routes.LOGIN} component={Login_1.Login}/>
            <react_router_dom_1.Route exact path={routes.REGISTER} component={Register_1.Register}/>
            <react_router_dom_1.Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword_1.ForgotPassword}/>
            <react_router_dom_1.Route exact path={routes.HOME} component={Home_1.Home}/>

          </react_router_dom_1.Switch>
        </div>
      </react_router_dom_1.BrowserRouter>);
    };
    return AppComponent;
}(react_1.default.Component));
exports.App = Authentication_1.Authentication(AppComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4vY2xpZW50LyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIscURBQXdFO0FBQ3hFLHVDQUFtQztBQUNuQyxzREFBMkM7QUFDM0MsNERBQXdEO0FBQ3hELDBDQUF5QztBQUN6Qyw2Q0FBNEM7QUFDNUMsc0RBQXFEO0FBQ3JELHdFQUFzRTtBQUN0RTtJQUEyQixnQ0FBZTtJQUN4QyxzQkFBWSxLQUFTO1FBQXJCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBS2I7UUFIQyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDOztJQUNKLENBQUM7SUFFTSx3Q0FBaUIsR0FBeEI7UUFBQSxpQkFNQztRQUxDLG1CQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQUEsUUFBUTtZQUN2QyxRQUFRO2dCQUNKLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxFQUFkLENBQWMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDRSxPQUFNLENBQ0osQ0FBQyxnQ0FBTSxDQUNMO1FBQUEsQ0FBQyxHQUFHLENBQ0Y7VUFBQSxDQUFDLHlCQUFNLENBQ0w7WUFBQSxDQUFDLHdCQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFLLENBQUMsRUFDbEQ7WUFBQSxDQUFDLHdCQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBUSxDQUFDLEVBQ3hEO1lBQUEsQ0FBQyx3QkFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsK0JBQWMsQ0FBQyxFQUNyRTtZQUFBLENBQUMsd0JBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQUksQ0FBQyxFQUVsRDs7VUFBQSxFQUFFLHlCQUFNLENBQ1Y7UUFBQSxFQUFFLEdBQUcsQ0FDUDtNQUFBLEVBQUUsZ0NBQU0sQ0FBQyxDQUNWLENBQUE7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBaENELENBQTJCLGVBQUssQ0FBQyxTQUFTLEdBZ0N6QztBQUVZLFFBQUEsR0FBRyxHQUFHLCtCQUFjLENBQUMsWUFBWSxDQUFDLENBQUMifQ==