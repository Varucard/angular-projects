// Validacines sencillas
import { FormControl } from "@angular/forms";

export const nombreApelldioPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = (control: FormControl) => {

  const valor = control.value?.trim().toLowerCase();

  if (valor === 'strider') return {noStrider: true};

  return null;
}

/**
  // Si no devuelve nada esta correcto en cambio si devuelve un objeto significa que existe algun error
  noPuedeSerStrider(control: FormControl) {

    const valor = control.value?.trim().toLowerCase();

    if (valor === 'strider') return {noStrider: true};

    return null;
  }
*/
