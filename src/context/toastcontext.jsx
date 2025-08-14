import { createContext, useContext,useState} from "react";
import Toast from "../component/toast";

  export const toastContext = createContext([]);


 export const ToastProvider = ({children}) => {


     const [open, setOpen] = useState(false);
      const [message , setMessage] = useState("");

       function showToast(newmessage){
        setMessage(newmessage)
        setOpen(true);
        setTimeout(()=>{ setOpen(false);},2000)}


    return (

      
<toastContext.Provider value={{showToast}}>
  <Toast open={open}  message={message} />
{children}

</toastContext.Provider>


    );
}

export  const useToast = () => { return useContext(toastContext)}