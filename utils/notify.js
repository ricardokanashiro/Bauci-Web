import { toast } from "react-toastify"

const notify = (message) => {

   toast.success(message, { 
      theme: "colored", 
      position: "top-center",
      autoClose: 2000
   })
}

export default notify