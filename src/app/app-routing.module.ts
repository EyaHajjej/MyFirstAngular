import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormTestComponent } from './components/form-test/form-test.component';

const routes: Routes = [

  {path: "register" , component : RegisterComponent },

  {path: "user" , component :UserComponent},
  {path: "test-class" , component :TestClassComponent},
  {path: "parent" , component :ParentComponent},
  {path: "child" , component :ChildComponent},
  {path: "products" , component :ProductsComponent},
  {path: "pipe" , component :PipeComponent},
  {path: "formTest" , component :FormTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
