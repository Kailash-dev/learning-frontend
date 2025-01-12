import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './routes-guards/auth.guard';
import { TasksComponent } from './pages/tasks/tasks.component';

export const routes: Routes = [
    {path:"",redirectTo:'login', pathMatch:'full'},
    {path:"login",component: SigninComponent},
    {path:"signup",component: SignupComponent},
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
];
