/**
 * The ValidaterUser class, having name property
 * @class ValidateUser
 * @constructor
**/


class ValidateUser {
    
    private _name: string;

    set name(newName: string) {
        if (newName.length > 5) {
            this._name = newName;
            console.log(`The user ${newName}`);
        }
        else {
            console.log("The user is not valid");
        }
    }

     get name(): string {
            return this._name;
        }
    
    }
    
    let userValidation = new ValidateUser();
    userValidation.name = "Sreelatha";
