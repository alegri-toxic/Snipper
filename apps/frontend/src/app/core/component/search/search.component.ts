import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'Snippeter-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  submitForm(): void {
    console.error(this.searchForm.value);
  }

  private createForm(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

}
