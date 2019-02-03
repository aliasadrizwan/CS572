import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UsersModule } from './users/users.module';
import { ErrorComponent } from './error.component';

const MY_ROUTES:Routes = [{path: 'users', component: UsersComponent},{path:'error', component: ErrorComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
