import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { BeerDescription } from "../BeerDescription/BeerDescription";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { FavoriteCart } from "../FavoriteCart/FavoriteCart";
import { NextStep } from "../NextStep/NextStep";




export const routes = () => ({

                "/" : () => OfferOnPage(), 
                "/opis" : () => BeerDescription(),
                "/koszyk" : () => ShoppingCart(),
                "/rejestracja": () => RegistrationForm(),
                "/ulubione" : () => FavoriteCart(),
                "/wybor-metody": () => NextStep(),
            });











