import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { removePrevievFavorModal } from "../toManipulateDOM/removeModal/removePrevievFavorModal";
import { pipeline as compose } from "../../pipeline";




export const createButtonToCloseFavorModal = (cl) => (txtContent) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(removePrevievFavorModal)()
        )(document.createElement("button"));

    element.appendChild(btn);
 return element;
}