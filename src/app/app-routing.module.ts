import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWithSkipLimitComponent } from './list-with-skip-limit/list-with-skip-limit.component';


const routes: Routes = [
  {path:'',component:ListWithSkipLimitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
