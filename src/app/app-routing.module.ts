import { PlayerFormComponent } from './player/player-form/player-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';

const routes: Routes = [
  {
    path: 'player', component: PlayerComponent, children: [
      {
        path: 'add', component: PlayerFormComponent
      },
      {
        path: 'list', component: PlayerListComponent
      },
      {
        path: 'edit/:index', component: PlayerFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
