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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var firebase_1 = require("../firebase");
var authContext_1 = require("./authContext");
exports.Authentication = function (Component) {
    var userAuthentication = /** @class */ (function (_super) {
        __extends(userAuthentication, _super);
        function userAuthentication(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                authUser: null
            };
            return _this;
        }
        userAuthentication.prototype.componentDidMount = function () {
            var _this = this;
            firebase_1.firebase.auth.onAuthStateChanged(function (authUser) {
                authUser
                    ? _this.setState(function () { return ({ authUser: authUser }); })
                    : _this.setState(function () { return ({ authUser: null }); });
            });
        };
        userAuthentication.prototype.render = function () {
            var authUser = this.state.authUser;
            return (<authContext_1.AuthContext.Provider value={authUser}>
                    <Component />
                </authContext_1.AuthContext.Provider>);
        };
        return userAuthentication;
    }(Component));
    return userAuthentication;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJjbGllbnQvc3JjL2ZpcmViYXNlL0F1dGhlbnRpY2F0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsd0NBQXVDO0FBQ3ZDLDZDQUE0QztBQWEvQixRQUFBLGNBQWMsR0FBRyxVQUFDLFNBQWM7SUFDekM7UUFBaUMsc0NBRWQ7UUFDWCw0QkFBWSxLQUFVO1lBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7WUFIRyxLQUFJLENBQUMsS0FBSyxHQUFFO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2IsQ0FBQzs7UUFDTixDQUFDO1FBQ0UsOENBQWlCLEdBQXhCO1lBQUEsaUJBT0M7WUFORyxtQkFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFBLFFBQVE7Z0JBRXJDLFFBQVE7b0JBQ0osQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLENBQUMsRUFBQyxRQUFRLFVBQUEsRUFBQyxDQUFDLEVBQVosQ0FBWSxDQUFDO29CQUNuQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ00sbUNBQU0sR0FBYjtZQUNZLElBQUEsOEJBQVEsQ0FBZ0I7WUFHaEMsT0FBTSxDQUVGLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQ2xDO29CQUFBLENBQUMsU0FBUyxDQUFBLEVBQ2Q7Z0JBQUEsRUFBRSx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUMxQixDQUFDO1FBQ04sQ0FBQztRQUNMLHlCQUFDO0lBQUQsQ0FBQyxBQTdCRCxDQUFpQyxTQUFTLEdBNkJ6QztJQUNELE9BQU8sa0JBQWtCLENBQUE7QUFDN0IsQ0FBQyxDQUFDIn0=