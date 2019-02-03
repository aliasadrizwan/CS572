import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule, Routes} from '@angular/router';
import { MyGuardGuard } from '../my-guard.guard';

const USER_Routes:Routes = [{path:'users/userdetails/:uuid',component: UserdetailsComponent, canActivate: [MyGuardGuard]}]

@NgModule({
  declarations: [UsersComponent,     
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(USER_Routes)
  ],
  providers: []
})
export class UsersModule { }
