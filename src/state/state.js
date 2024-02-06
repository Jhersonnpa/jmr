import { atom, map } from 'nanostores';
import resources from "../data/JMresource.json";


export const recursos = map({})
export const recursosFiltrados = map({})
export const buscador = atom("");
export const resultados = atom(null);

recursos.setKey("items", resources.resources)