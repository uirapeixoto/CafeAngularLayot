import { Component,EventEmitter, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from 'src/app/data/data.service';


@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
    ) { }

  blogPost =  {
    title: '',
    body: '',
    category: '',
    position: 0,
    date_posted: new Date()
  }

  public event: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  onSubmit():void{
    this.blogPost.position = this.dataService.dataLength();
    console.log()
    debugger
    this.event.emit([{data: this.blogPost}]);
    console.log(this.blogPost);
    this.dialogRef.close();
  }

  categories = this.dataService.getCategories();

}
