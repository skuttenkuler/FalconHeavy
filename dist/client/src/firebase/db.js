"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("./firebase");
exports.fbCreateUser = function (id, username, email) { return firebase_1.db.ref("users/" + id).set({
    email: email,
    username: username
}); };
exports.getUsers = function () { return firebase_1.db.ref("users").once("value"); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJjbGllbnQvc3JjL2ZpcmViYXNlL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQThCO0FBRWpCLFFBQUEsWUFBWSxHQUFHLFVBQ3hCLEVBQVUsRUFDVixRQUFnQixFQUNoQixLQUFZLElBQ1AsT0FBQSxhQUFFLENBQUMsR0FBRyxDQUFDLFdBQVMsRUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3ZCLEtBQUssT0FBQTtJQUNMLFFBQVEsVUFBQTtDQUNYLENBQUMsRUFIRCxDQUdDLENBQUM7QUFFRSxRQUFBLFFBQVEsR0FBRyxjQUFNLE9BQUEsYUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTdCLENBQTZCLENBQUEifQ==