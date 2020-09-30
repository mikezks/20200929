import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateCity(control: AbstractControl): ValidationErrors | null {
  const allowedCities = [
    'Graz', 'Hamburg', 'Düsseldorf'
  ];

  if (control && allowedCities.indexOf(control.value) === -1) {
    return {
      city: {
        allowedCities,
        actualCity: control.value
      }
    };
  }

  return null;
}

export function validateCityWithParams(allowedCities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control && allowedCities.indexOf(control.value) === -1) {
      return {
        city: {
          allowedCities,
          actualCity: control.value
        }
      };
    }

    return null;
  }
}
