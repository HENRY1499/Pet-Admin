import { FormGroup } from "@angular/forms";

export class functions {
    static invalidField(field: string, f: FormGroup, formSubmited: boolean): boolean {
        if (formSubmited && f.controls[field].invalid) {
            return true;
        } else {
            return false;
        }
    }
    static screenSize(minWidth: number, maxWidth: number): boolean {
        if (window.matchMedia(`(min-width:${minWidth}px) and (max-width:${maxWidth}px)`).matches) {
            return true;
        } else {
            return false;

        }
    }
}