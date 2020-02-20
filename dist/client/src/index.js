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
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = require("./App");
var serviceWorker = __importStar(require("./serviceWorker"));
react_dom_1.default.render(<App_1.App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJjbGllbnQvc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsd0RBQWlDO0FBQ2pDLHVCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0IsNkRBQWlEO0FBRWpELG1CQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBRyxDQUFBLEVBQUUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFekQsdUVBQXVFO0FBQ3ZFLHdFQUF3RTtBQUN4RSwyREFBMkQ7QUFDM0QsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDIn0=