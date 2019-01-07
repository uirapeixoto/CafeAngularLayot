import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'post', component: PostListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouters { }