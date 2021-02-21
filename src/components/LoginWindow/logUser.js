import { validation } from '../RegistrationForm/validation/validation';
import { store } from '../../manageState/store';



export const validateAndLogUser = (form) => {

   const { token } = store.getState().reducerToResponseForJwt.items; 
   
    form.addEventListener("submit", (e) => {

        e.preventDefault();     
        validation(e.target) 
        
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers:{
                "Cookie": "login=true", 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                    email: form.querySelector(".email").value,
                    password: form.querySelector(".password").value,            
            })
        })
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err))
    })
}    