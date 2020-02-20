"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ForgotPassword_1 = require("../ForgotPassword/ForgotPassword");
var Register_1 = require("../Register/Register");
var LoginForm_1 = require("./LoginForm");
var UserLogin = function (_a) {
    var history = _a.history;
    return (<div>
        <h1>Log In</h1>
        <LoginForm_1.LoginForm history={history}/>
        <Register_1.RegisterLink />
        <ForgotPassword_1.ForgotPasswordLink />
    </div>);
};
exports.Login = react_router_dom_1.withRouter(UserLogin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJjbGllbnQvc3JjL3BhZ2VzL0xvZ2luL0xvZ2luLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUMxQixxREFBOEM7QUFDOUMsbUVBQXNFO0FBQ3RFLGlEQUFvRDtBQUNwRCx5Q0FBd0M7QUFHeEMsSUFBTSxTQUFTLEdBQUcsVUFBQyxFQUFtQztRQUFqQyxvQkFBTztJQUErQixPQUFBLENBQ3ZELENBQUMsR0FBRyxDQUNBO1FBQUEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDZDtRQUFBLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFDNUI7UUFBQSxDQUFDLHVCQUFZLENBQUMsQUFBRCxFQUNiO1FBQUEsQ0FBQyxtQ0FBa0IsQ0FBQSxFQUN2QjtJQUFBLEVBQUUsR0FBRyxDQUFDLENBQ1Q7QUFQMEQsQ0FPMUQsQ0FBQztBQUNXLFFBQUEsS0FBSyxHQUFHLDZCQUFVLENBQUMsU0FBUyxDQUFDLENBQUEifQ==