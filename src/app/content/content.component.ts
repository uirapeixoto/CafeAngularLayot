import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }

  ngOnInit() {
  }

}
