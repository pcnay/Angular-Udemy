import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/Counter/Counter-page.component';
import { HeroPageComponent } from './Pages/Hero/Hero-page.component'

export const routes: Routes = [
  {
    path:'',
    component:CounterPageComponent
  },
  {
    path:'Hero',
    component: HeroPageComponent
  }

];
