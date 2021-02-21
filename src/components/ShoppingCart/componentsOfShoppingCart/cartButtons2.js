import { pipeline as compose } from '../../../pipeline';
import { createDiv, createLinkTo } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const cartButtons2 = (element) => {
      
    const wrapperDiv = compose(            
            createLinkTo("")("kontynuuj zakupy")("#/"),            
            createLinkTo("")("następny krok")("#/wybor-metody"),
       )(createDiv("cart-buttons2"))

    element.appendChild(wrapperDiv);
 return element;
}
