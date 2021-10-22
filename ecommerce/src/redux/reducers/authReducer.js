export const LoginReducer=(state={EcommUser:null, error:false, Loading:false },action)=>{
    switch (action.type) {
       case "LOGIN-REQUEST":
            return {
              EcommUser:null,
              error:false,
              Loading:true 
            }
       case "LOGIN-SUCCESSFUL":
            return {
              EcommUser:action.payLoad,
              error:false,
              Loading:false 
            } 
       case "LOGIN-FAIL":
            return {
              EcommUser:null,
              error:action.payLoad,
              Loading:false 
            }      
       case "LOGOUT-USER":
            return {
              EcommUser:null,
              error:false,
              Loading:false 
            }
             
       default:
           return state;
    }
                                                                                                                                                                                                    
}