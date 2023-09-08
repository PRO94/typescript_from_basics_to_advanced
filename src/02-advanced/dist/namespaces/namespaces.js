"use strict";
var Form;
(function (Form) {
    class MyForm {
        email;
        type = 'inline';
        state = 'active';
        constructor(email) {
            this.email = email;
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.form = new MyForm('test@test.com');
})(Form || (Form = {}));
console.log(Form.form);
//# sourceMappingURL=namespaces.js.map