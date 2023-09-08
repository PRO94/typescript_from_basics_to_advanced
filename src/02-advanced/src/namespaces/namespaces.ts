/// <reference path="form-namespace.ts" />
// prev /// is a meta data to include existing namespace to the file

// other namespaces must have the same names. It's similar to partial classes
namespace Form {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';
    
        constructor(public email: string) { }
    
        getInfo() : FormInfo {
            return {
                 type: this.type,
                 state: this.state
            }
        }
    }
    
    export const form = new MyForm('test@test.com');
}

console.log(Form.form);