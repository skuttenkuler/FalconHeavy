"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var firebase_1 = require("../../firebase");
exports.LogOutBtn = function () {
    return (<button type="button" onClick={firebase_1.auth.fbSignOut}>
        Log Out
    </button>);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nT3V0QnRuLmpzIiwic291cmNlUm9vdCI6Ii4vY2xpZW50LyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9jb21wb25lbnRzL0xvZ091dEJ0bi9Mb2dPdXRCdG4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLDJDQUFzQztBQUV6QixRQUFBLFNBQVMsR0FBRztJQUNyQixPQUFNLENBQ04sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFJLENBQUMsU0FBUyxDQUFDLENBQzFDOztJQUNKLEVBQUUsTUFBTSxDQUFDLENBQ1IsQ0FBQTtBQUNMLENBQUMsQ0FBQyJ9