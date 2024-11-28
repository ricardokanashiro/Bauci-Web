import { toast } from "react-toastify"

const notify = (message) => {

   toast.success(message, {
      theme: "colored",
      position: "top-center",
      autoClose: 4000
   })
}

export const notifyError = (message) => {

   toast.error(message, {
      theme: "colored",
      position: "top-center",
      autoClose: 4000
   })
}

export default notify