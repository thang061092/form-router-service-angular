import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AddComponent} from './users/add/add.component';
import {ListComponent} from './users/list/list.component';


const routes: Routes = [
  {
    path: 'addUser',
    component: AddComponent
  },
  {
    path: 'listUser',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
