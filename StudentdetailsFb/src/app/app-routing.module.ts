import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './Components/display/display.component';
import { GetInfoComponent } from './Components/get-info/get-info.component';

const routes: Routes = [
  {path:'',redirectTo: 'get-info',pathMatch: 'full'},
{path:'get-info',component:GetInfoComponent},
{path:'display',component:DisplayComponent},
// {path:'services',component:ServicespageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
