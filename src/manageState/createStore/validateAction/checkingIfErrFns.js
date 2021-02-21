export const errIfIsNotObject = (action) =>{ 
        if (!action || typeof action !== "object" || Array.isArray(action)){
        throw new Error("Action must be an object!");
    }
}

export const errIfIsHasNoType = ({ type }) => {
        if (typeof type === "undefined") {
            throw new Error("Action must have the type!");
        }
}