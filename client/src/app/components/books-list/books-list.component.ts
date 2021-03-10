import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  Books:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });
  }


  delete(id:string, i:number) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }

}
