import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CorebusinessComponent } from './home/corebusiness/corebusiness.component';
import { InstitutionalComponent } from './home/institutional/institutional.component'
import { NftComponent } from './home/nft/nft.component';


const routes: Routes = [  
  { path: 'home', component: HomeComponent, children : [
    { path: 'core', component: CorebusinessComponent },    
    { path: 'institutional', component: InstitutionalComponent },
    { path: 'nft', component: NftComponent },
    { path: '', redirectTo: 'core', pathMatch: 'full' }              
  ] },    
  { path: 'landing', component: LandingComponent },    
  { path: '', redirectTo: '/landing', pathMatch: 'full' }      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
