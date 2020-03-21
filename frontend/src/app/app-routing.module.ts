import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { EnterdetailsComponent } from './enterdetails/enterdetails.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'',redirectTo:'/customers',pathMatch:'full'},
  {path:'enterdetails',component:EnterdetailsComponent},
  {path:'customers',component:ViewComponent},
  {path:'edit/:firstname',component:EditComponent},
  {path:'search/:search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
