import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';
import { AuthModule } from './components/modules/auth/auth.module';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path :'404',
    component: NotFoundComponent
  },
  {
    path: 'auth',
    component: LoginComponent
  
  },
  {
    path: 'authLazy',
    loadChildren:() => import ('./components/modules/auth/auth.module').then(m => m.AuthModule),
    
  },
  {
    path: 'pokedex',
    loadChildren:() => import ('./components/modules/pokedex/pokedex.module').then(m => m.PokedexModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard] 

  },
  {
    path :'',
    component: NotFoundComponent,
    pathMatch: 'full' //Es estricta con el path
  },
  {
    path:'**', //lo marca como comodin 
    redirectTo: '404'
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
