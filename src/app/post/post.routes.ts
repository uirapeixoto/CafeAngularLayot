import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

const routes: Routes = [
    {
        path: 'post', 
        children: [
            { path: '', component: PostListComponent },
            { path: 'list', component: PostListComponent },
            { path: 'dialog', component: PostDialogComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PostRouters { }