import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule} from '@angular/common/http' ;

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    TestClassComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ObservableTestComponent,
    PipeComponent,
    FormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
