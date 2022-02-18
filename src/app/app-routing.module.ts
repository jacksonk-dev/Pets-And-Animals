import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'roast', component: PetsComponent },
  { path: 'animals', component: PetsComponent },
  { path: 'animal-feeds', component: PetsComponent },
  { path: 'vet-services', component: PetsComponent },
  { path: 'settings', component: PetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
