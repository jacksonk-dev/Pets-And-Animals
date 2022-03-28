import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
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
