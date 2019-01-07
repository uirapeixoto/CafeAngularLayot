import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { PostDataSource } from 'src/app/dashboard/dashboard.component';
import { MatDialog } from '@angular/material';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  ngOnInit() {
  }

  deletePost(id){
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });

    dialogRef.componentInstance.event.subscribe(
      (result) => {
        this.dataService.addPost(result.data);
        this.dataSource = new PostDataSource(this.dataService);
      });
  }
}
