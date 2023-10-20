import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formHandling();
  }

  searchForm!: FormGroup;
  sale!: Boolean;

  onSubmit() {
    this.formHandling();
    console.warn(this.searchForm.value);
  }

  formHandling() {
    this.searchForm = this.fb.group({
      lougradouro: [''],
      tipo: [''],
    });
  }

  OnSet() {
    this.sale ? (this.sale = false) : (this.sale = true);
  }
}
