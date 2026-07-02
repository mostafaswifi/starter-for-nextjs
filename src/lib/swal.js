import Swal from 'sweetalert2'

export const swalAlert = (title, text, icon, confirmButtonText) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
    draggable: true,
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
    stopKeyupPropagation: false,
    onOpen: () => {
      Swal.showLoading();
    }

  })
}



