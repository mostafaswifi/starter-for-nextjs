import Swal from 'sweetalert2'

export const swalAlert = (title, text, icon, confirmButtonText) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
    draggable: true,
    confirmButtonText: "نعم",
    cancelButtonText: "لا"
  })
}



