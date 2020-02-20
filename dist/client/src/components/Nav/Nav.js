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
var authContext_1 = require("../../firebase/authContext");
var LogOutBtn_1 = require("../LogOutBtn/LogOutBtn");
exports.Nav = function () { return (<authContext_1.AuthContext.Consumer>
        {function (authUser) { return (authUser ? <UserNav /> : null); }}
    </authContext_1.AuthContext.Consumer>); };
var UserNav = function () { return (<ul>
        <li>
            <react_router_dom_1.Link to={routes.HOME}>Home</react_router_dom_1.Link>
        </li>
        <li>
           <LogOutBtn_1.LogOutBtn />
        </li>
    </ul>); };
// const NoUserNav = () => {
//     <ul>
//         <li>
//             <li>
//                 <Link to={routes.LOGIN}>Login</Link>
//             </li>
//             <li>
//                 <Link to={routes.REGISTER}>Register</Link>
//             </li>
//         </li>
//     </ul>
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii4vY2xpZW50LyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9jb21wb25lbnRzL05hdi9OYXYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixxREFBc0M7QUFDdEMsMERBQTZDO0FBQzdDLDBEQUF5RDtBQUN6RCxvREFBaUQ7QUFFcEMsUUFBQSxHQUFHLEdBQUcsY0FBTSxPQUFBLENBQ3JCLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQ2pCO1FBQUEsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUMvQztJQUFBLEVBQUUseUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FDMUIsRUFKd0IsQ0FJeEIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLGNBQU0sT0FBQSxDQUNsQixDQUFDLEVBQUUsQ0FDQztRQUFBLENBQUMsRUFBRSxDQUNDO1lBQUEsQ0FBQyx1QkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsdUJBQUksQ0FDckM7UUFBQSxFQUFFLEVBQUUsQ0FDSjtRQUFBLENBQUMsRUFBRSxDQUNBO1dBQUEsQ0FBQyxxQkFBUyxDQUFBLEVBQ2I7UUFBQSxFQUFFLEVBQUUsQ0FDUjtJQUFBLEVBQUUsRUFBRSxDQUFDLENBQ1IsRUFUcUIsQ0FTckIsQ0FBQztBQUNGLDRCQUE0QjtBQUM1QixXQUFXO0FBQ1gsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQix1REFBdUQ7QUFDdkQsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQiw2REFBNkQ7QUFDN0Qsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osSUFBSSJ9