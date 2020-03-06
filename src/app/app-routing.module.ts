import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableViewComponent } from './table/table-view/table-view.component';
import { DetailViewComponent } from './table/detail-view/detail-view.component';


const routes: Routes = [
  {
    path: '',
    component: TableViewComponent,

  },
  {
    path: 'view/:id',
    component: DetailViewComponent,

  },
  {
    path: '**',
    redirectTo: 'table-view',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
