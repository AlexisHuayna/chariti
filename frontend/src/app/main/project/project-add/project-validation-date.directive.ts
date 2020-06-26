import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validationDate(control: AbstractControl): { [key: string]: any } | null {
    const projectdateinicontrol = control.get('projectdateini');
    const projectdateclosecontrol = control.get('projectdateclose');
    const dateiniseparator: string = projectdateinicontrol.value;
    const datecloseseparator: string = projectdateclosecontrol.value;
    const dateini = dateiniseparator.split('-');
    const dateclose = datecloseseparator.split('-');
    if (dateclose[0] > dateini[0]) {
      return null;
    } else if (dateclose[0] < dateini[0]) {
      return { invalidDate: true };
    } else {
      if (dateclose[1] > dateini[1]) {
        return null;
      } else if (dateclose[1] > dateini[1]) {
        return { invalidDate: true };
      } else {
        if (dateclose[2] >= dateini[2]) {
          return null;
        } else {
          return { invalidDate: true };
        }
      }
    }

  }
