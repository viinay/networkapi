import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-with-skip-limit',
  templateUrl: './list-with-skip-limit.component.html',
  styleUrls: ['./list-with-skip-limit.component.css']
})
export class ListWithSkipLimitComponent implements OnInit {
  books:object[];

  constructor(
    private _api:ApiService
  ) { }

  ngOnInit(): void {

    this.books = [{
      book:1
    },{
      book:2
    }]

    this._api.listWithSL({skip:0,limit:5,baseUrl:'http://localhost:3000/books',auto:false})
      .subscribe(books=>{
        console.log('--->',books)
        this.books = this.books.concat(books)
      })
  }



}
