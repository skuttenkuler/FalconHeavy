"use strict";
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
var routes = __importStar(require("../../routes/routes"));
var RegisterForm_1 = require("./RegisterForm");
var RegisterComponent = function () { return (<div>
        <h1>Register</h1>
        <RegisterForm_1.RegisterForm />
    </div>); };
exports.RegisterLink = function () { return (<p>
        No account yet? <react_router_dom_1.Link to={routes.REGISTER}>Register</react_router_dom_1.Link>
    </p>); };
exports.Register = react_router_dom_1.withRouter(RegisterComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJjbGllbnQvc3JjL3BhZ2VzL1JlZ2lzdGVyL1JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIscURBQW1EO0FBQ25ELDBEQUE4QztBQUM5QywrQ0FBOEM7QUFFOUMsSUFBTSxpQkFBaUIsR0FBRyxjQUFNLE9BQUEsQ0FDNUIsQ0FBQyxHQUFHLENBQ0E7UUFBQSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNoQjtRQUFBLENBQUMsMkJBQVksQ0FBQSxFQUNqQjtJQUFBLEVBQUUsR0FBRyxDQUFDLENBQ1QsRUFMK0IsQ0FLL0IsQ0FBRTtBQUVVLFFBQUEsWUFBWSxHQUFHLGNBQU0sT0FBQSxDQUM5QixDQUFDLENBQUMsQ0FDRTt3QkFBZ0IsQ0FBQyx1QkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsdUJBQUksQ0FDN0Q7SUFBQSxFQUFFLENBQUMsQ0FBQyxDQUNQLEVBSmlDLENBSWpDLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRyw2QkFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMifQ==