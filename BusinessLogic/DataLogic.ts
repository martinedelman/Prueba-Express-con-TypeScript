import { Datos } from "../Models/Datos";

export function checkInputIsValid(data: Datos) : boolean {
    return data.nombre.length > 0 && data.id != null;
}