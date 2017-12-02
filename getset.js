/**
 * The ValidaterUser class, having name property
 * @class ValidateUser
 * @constructor
**/
var ValidateUse = /** @class */ (function () {
    function ValidateUse() {
    }
    Object.defineProperty(ValidateUse.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length > 5) {
                this._name = newName;
                console.log("The user " + newName);
            }
            else {
                console.log("The user is not valid");
            }
        },
        enumerable: true,
        configurable: true
    });
    return ValidateUse;
}());
var userValidatio = new ValidateUse();
userValidatio.name = "Sreelatha";
