import axios, { isAxiosError } from "axios";
import { profileResponse, nameUser } from "../types";

export async function getUser( userName : nameUser ) {
    try {
        const url = `https://api.github.com/users/${userName}`
        const { data } = await axios(url)
        const result = profileResponse.safeParse(data)
        if(result.success){
            return result.data
        }   else {
            throw new Error("Error en la validación de los datos");
        }
     } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
