import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './pages/find/find.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { PokedexRoutingModule } from './pokedex-routing.module';



@NgModule({
  declarations: [
    FindComponent,
    PokedexComponent,
    PokemonComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
