import { Component, signal, computed } from "@angular/core"
import { UpperCasePipe } from "@angular/common"

//Es una simple clase
// Para hacerlo un componente que se pueda usar en proyecto, se tiene que agregar un "@Component" que es un Decorador.
// Se debe colocar el "template"
@Component({
  imports:[UpperCasePipe],
  templateUrl: './Hero-page.component.html',
  styleUrl: './Hero-page.component.css'
})
export class HeroPageComponent {
  //counter = 0
  // Se hace uso de "signal"
  //counterSignal = signal(0)
  nameSignal = signal('Ironman')
  edadSignal = signal(45)

  // Crear una senal conmutada (solo lectura)
  heroDescription = computed(() => {
    const description = ` ${ this.nameSignal() } - ${ this.edadSignal() }`
    return description
  })

  nameCapitalize = computed (() => {
    const CapitalizeName = this.nameSignal().toUpperCase()
    return CapitalizeName
  })

/*
  getHeroDescription()
  {
    // this.nameSignal() = Para obtener el valor.
    return ` ${ this.nameSignal() } + ${ this.edadSignal()}`
  }
*/

  changeHero()
  {
    this.nameSignal.set('Spiderman')
    this.edadSignal.set(22)
  }

  changeAge()
  {
    this.edadSignal.set(60)
  }

  resetForm()
  {
    this.nameSignal.set('Ironman')
    this.edadSignal.set(25)
  }
  //increaseBy(value:number){
    //this.counter += value

    // Una forma de asignar o restar  el valor de 1 usando senales.
    // Esta forma es mas complicada
    //this.counterSignal.set(this.counterSignal()+value)
    //Otra forma
    //this.counterSignal.update((current) => current+value)
  // }

  /*
  // Se crea la funcion dentro del componente:
  resetCounter(){
    this.counter = 0
    this.counterSignal.set(0)
  }
  */

}
