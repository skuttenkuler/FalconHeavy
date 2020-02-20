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
//import { db } from "../../firebase";
var Authorization_1 = require("../../firebase/Authorization");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: null
        };
        return _this;
    }
    HomeComponent.prototype.render = function () {
        return (<div>
                <h1>HOME</h1>
            </div>);
    };
    return HomeComponent;
}(react_1.default.Component));
exports.default = HomeComponent;
var authCondition = function (authUser) { return !!authUser; };
exports.Home = Authorization_1.Authorization(authCondition)(HomeComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIuL2NsaWVudC8iLCJzb3VyY2VzIjpbImNsaWVudC9zcmMvcGFnZXMvSG9tZS9Ib21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBeUI7QUFDekIsc0NBQXNDO0FBQ3RDLDhEQUE0RDtBQUc1RDtJQUE0QixpQ0FBZTtJQUN2Qyx1QkFBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFFO1lBQ1IsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDOztJQUNOLENBQUM7SUFDTSw4QkFBTSxHQUFiO1FBQ0ksT0FBTSxDQUNGLENBQUMsR0FBRyxDQUNBO2dCQUFBLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2hCO1lBQUEsRUFBRSxHQUFHLENBQUMsQ0FDVCxDQUFBO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWZELENBQTRCLGVBQUssQ0FBQyxTQUFTLEdBZTFDO0FBQ0Qsa0JBQWUsYUFBYSxDQUFDO0FBQzdCLElBQU0sYUFBYSxHQUFHLFVBQUMsUUFBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUM7QUFDdkMsUUFBQSxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQSJ9