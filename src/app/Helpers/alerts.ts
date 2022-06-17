// import sweetalert2
import Swal, { SweetAlertIcon } from 'sweetalert2';

export class alerts {
    static alertaBasica(title: string, text: string, icon: SweetAlertIcon) {
        return Swal.fire(title, text, icon);
    }
}