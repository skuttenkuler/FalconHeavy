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
var routes = __importStar(require("../routes/routes"));
var firebase_1 = require("../firebase");
var authContext_1 = require("./authContext");
exports.Authorization = function (condition) { return function (Component) {
    var userAuthorization = /** @class */ (function (_super) {
        __extends(userAuthorization, _super);
        function userAuthorization() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        userAuthorization.prototype.componentDidMount = function () {
            var _this = this;
            firebase_1.firebase.auth.onAuthStateChanged(function (authUser) {
                if (!condition(authUser)) {
                    _this.props.history.push(routes.LOGIN);
                }
            });
        };
        userAuthorization.prototype.render = function () {
            return (<authContext_1.AuthContext.Consumer>
            {function (authUser) { return (authUser ? <Component /> : null); }}
          </authContext_1.AuthContext.Consumer>);
        };
        return userAuthorization;
    }(react_1.default.Component));
    return react_router_dom_1.withRouter(userAuthorization);
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL2NsaWVudC8iLCJzb3VyY2VzIjpbImNsaWVudC9zcmMvZmlyZWJhc2UvQXV0aG9yaXphdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixxREFBNEM7QUFDNUMsdURBQTJDO0FBQzNDLHdDQUF1QztBQUN2Qyw2Q0FBNEM7QUFNN0IsUUFBQSxhQUFhLEdBQUcsVUFBQyxTQUFjLElBQUssT0FBQSxVQUFDLFNBQWM7SUFDOUQ7UUFBZ0MscUNBQ1Q7UUFEdkI7O1FBaUJBLENBQUM7UUFmYyw2Q0FBaUIsR0FBeEI7WUFBQSxpQkFNQztZQUxHLG1CQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQUEsUUFBUTtnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFQSxrQ0FBTSxHQUFiO1lBQ0UsT0FBTyxDQUNMLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQ25CO1lBQUEsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxBQUFELEVBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQ2hEO1VBQUEsRUFBRSx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUN4QixDQUFDO1FBQ0osQ0FBQztRQUNILHdCQUFDO0lBQUQsQ0FBQyxBQWpCRCxDQUFnQyxlQUFLLENBQUMsU0FBUyxHQWlCOUM7SUFFRCxPQUFPLDZCQUFVLENBQUMsaUJBQXdCLENBQUMsQ0FBQztBQUM5QyxDQUFDLEVBckJnRCxDQXFCaEQsQ0FBQyJ9