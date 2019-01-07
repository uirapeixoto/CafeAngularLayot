import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRouters } from './post.routes';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostListComponent,PostDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PostRouters
  ],
  exports: [
    PostRouters
  ]
})
export class PostModule { }
