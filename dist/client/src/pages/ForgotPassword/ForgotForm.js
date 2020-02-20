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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var firebase_1 = require("../../firebase");
var ForgotForm = /** @class */ (function (_super) {
    __extends(ForgotForm, _super);
    function ForgotForm(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubmit = function (event) {
            event.preventDefault();
            var email = _this.state.email;
            firebase_1.auth
                .fbPasswordReset(email)
                .then(function () {
                _this.setState(function () { return (__assign({}, ForgotForm.INITIAL_STATE)); });
            })
                .catch(function (error) {
                _this.setState(ForgotForm.propKey("error", error));
            });
        };
        _this.state = __assign({}, ForgotForm.INITIAL_STATE);
        return _this;
    }
    ForgotForm.propKey = function (propertyName, value) {
        var _a;
        return _a = {}, _a[propertyName] = value, _a;
    };
    ForgotForm.prototype.render = function () {
        var _this = this;
        var _a = this.state, email = _a.email, error = _a.error;
        var invalidInput = email === "";
        return (<form onSubmit={function (event) { return _this.onSubmit(event); }}>
                <input value={email} onChange={function (event) { return _this.setStateWithEvent(event, "email"); }} type="text" placeholder="Email..."/>
                <button disabled={invalidInput} type="submit">
                    Reset Password
                </button>
                {error && <p>{error.message}</p>}
            </form>);
    };
    ForgotForm.prototype.setStateWithEvent = function (event, columnType) {
        this.setState(ForgotForm.propKey(columnType, event.target.value));
    };
    ForgotForm.INITIAL_STATE = {
        email: "",
        error: null
    };
    return ForgotForm;
}(react_1.default.Component));
exports.ForgotForm = ForgotForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yZ290Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIuL2NsaWVudC8iLCJzb3VyY2VzIjpbImNsaWVudC9zcmMvcGFnZXMvRm9yZ290UGFzc3dvcmQvRm9yZ290Rm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsMkNBQXNDO0FBR3RDO0lBQWdDLDhCQUFlO0lBVTNDLG9CQUFZLEtBQVM7UUFBckIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FFZjtRQUNNLGNBQVEsR0FBRyxVQUFDLEtBQVM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2YsSUFBQSx5QkFBSyxDQUFzQjtZQUNuQyxlQUFJO2lCQUNDLGVBQWUsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCLElBQUksQ0FBQztnQkFDRixLQUFJLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxjQUFNLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxLQUFLO2dCQUNSLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQztRQWJFLEtBQUksQ0FBQyxLQUFLLGdCQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFDL0MsQ0FBQztJQVBjLGtCQUFPLEdBQXRCLFVBQXVCLFlBQW9CLEVBQUUsS0FBYTs7UUFDdEQsZ0JBQVEsR0FBQyxZQUFZLElBQUcsS0FBSyxLQUFFO0lBRW5DLENBQUM7SUFpQk0sMkJBQU0sR0FBYjtRQUFBLGlCQVlDO1FBWFMsSUFBQSxlQUErQixFQUE5QixnQkFBSyxFQUFFLGdCQUF1QixDQUFDO1FBQ3RDLElBQU0sWUFBWSxHQUFHLEtBQUssS0FBSyxFQUFFLENBQUM7UUFDbEMsT0FBTSxDQUNGLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUM1QztnQkFBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQ3BIO2dCQUFBLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ3pDOztnQkFDSixFQUFFLE1BQU0sQ0FDUjtnQkFBQSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDcEM7WUFBQSxFQUFFLElBQUksQ0FBQyxDQUNWLENBQUM7SUFDTixDQUFDO0lBQ08sc0NBQWlCLEdBQXpCLFVBQTBCLEtBQVMsRUFBRSxVQUFrQjtRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUNULFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFHLEtBQUssQ0FBQyxNQUFjLENBQUMsS0FBSyxDQUFDLENBQzlELENBQUM7SUFDTixDQUFDO0lBMUNjLHdCQUFhLEdBQUc7UUFDM0IsS0FBSyxFQUFDLEVBQUU7UUFDUixLQUFLLEVBQUMsSUFBSTtLQUNiLENBQUM7SUF3Q04saUJBQUM7Q0FBQSxBQTVDRCxDQUFnQyxlQUFLLENBQUMsU0FBUyxHQTRDOUM7QUE1Q1ksZ0NBQVUifQ==