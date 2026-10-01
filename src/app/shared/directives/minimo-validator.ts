import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms'

@Directive({
  selector: '[minimo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidator,
    multi: true
  }]
})
export class MinimoValidator implements Validator{
  @Input("valorMinimo") valorMinimo: string = "0"
  constructor(){ }
  validate(c: AbstractControl): ValidationErrors | null {
    let v: number = +c.value
    let min: number = +this.valorMinimo

    if(isNaN(min)){
      min = 0
    }
    if(isNaN(v)){
      return{ 'minimo': true, 'requiredValue': 18}
    } else if(v < min){
      return{ 'minimo': true, 'requiredValue': 18}
    }
    return null
  }
}
