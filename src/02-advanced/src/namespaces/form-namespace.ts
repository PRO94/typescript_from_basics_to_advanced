// if we need to export some types from a namespace - need to use key 'export'
namespace Form {
    export type FormType = 'inline' | 'block';
    export type FormState = 'active' | 'disabled';
    
    export interface FormInfo {
        type: FormType
        state: FormState
    }
}