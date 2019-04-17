import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { UserGuard } from './UserGuard';

@NgModule({
    declarations: [
        UsersComponent,
        UserdetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: UsersComponent,
                children: [{ path: ':uuid', component: UserdetailsComponent, canActivate: [UserGuard] }]
            }
        ])
    ],
    providers: [],
    bootstrap: [UsersComponent, UserdetailsComponent]
})
export class UsersModule { }
