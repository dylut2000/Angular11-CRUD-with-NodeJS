import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ]
})
export class BookDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor (
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService) {

      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.crudService.GetBook(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          price: res['price'],
          description: res['description']
        });
      });

      this.updateForm = this.formBuilder.group({
        name: [''],
        price: [''],
        description: ['']
      });

     }


  ngOnInit (): void {
  }


  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
