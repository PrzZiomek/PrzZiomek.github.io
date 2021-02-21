import { store } from "../../manageState/store";



export const sendShoppingCartContentToDB = () => {

    const { token } = store.getState().reducerToResponseForJwt.items; 
    const cartContent = store.getState().reducerToShopping;


    fetch("http://localhost:8080/api/cart-content", {
            method: "POST",
            headers:{ 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({ cartContent })
        })
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err))


}

    