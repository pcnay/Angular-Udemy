import { Component, signal } from "@angular/core"; // Se agrega automaticamente al colocar la palabra "@Component"
import { ValueChangeEvent } from "@angular/forms";


// Es una simple clase
// Para hacerlo un componente que se pueda usar en proyecto, se tiene que agregar un "@Component" que es un Decorador.
// Se debe colocar el "template"
@Component({
  templateUrl: './Counter-page.component.html',
  styleUrl: './Counter-page.component.css'
})
export class CounterPageComponent {
  counter = 0
  // Se hace uso de "signal"
  counterSignal = signal(0)


  increaseBy(value:number){
    this.counter += value

    // Una forma de asignar o restar  el valor de 1 usando senales.
    // Esta forma es mas complicada
    //this.counterSignal.set(this.counterSignal()+value)
    //Otra forma
    this.counterSignal.update((current) => current+value)
   }

  // Se crea la funcion dentro del componente:
  resetCounter(){
    this.counter = 0
    this.counterSignal.set(0)
  }
}
