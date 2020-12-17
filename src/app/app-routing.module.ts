import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './ajax/posts/posts.component';
import { MyformComponent } from './forms/myform/myform.component';
import { Hw1Component } from './homeworks/hw1/hw1.component';
import { Hw2Component } from './homeworks/hw2/hw2.component';

const routes: Routes = [
  {
    path: '',
    component: MyformComponent,
  },
  {
    path: 'ajax',
    component: PostsComponent,
  },
  {
    path: 'hw1',
    component: Hw1Component,
  },
  {
    path: 'hw2',
    component: Hw2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
