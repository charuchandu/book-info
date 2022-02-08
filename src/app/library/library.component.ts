import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  bookData:any;

  constructor(public bs: BookService) { }

  ngOnInit(): void {
    this.bs.getData1().subscribe(
      (data)=>{
        this.bookData=data.ISBN;
        console.log(data.ISBN)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  openUrl(){
    window.location = this.bookData.url;
  }
}
