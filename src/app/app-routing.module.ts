import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './pets/add/add.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: 'pets',
    component: PetsComponent,
    children: [
      { path: 'add', component: AddPetComponent }
    ]
  },
  { path: 'roast', component: ComingSoonComponent },
  { path: 'animals', component: ComingSoonComponent },
  { path: 'animal-feeds', component: ComingSoonComponent },
  { path: 'vet-services', component: ComingSoonComponent },
  { path: 'settings', component: ComingSoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
