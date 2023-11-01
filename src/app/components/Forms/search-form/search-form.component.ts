import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { ImovelService } from 'src/app/services/imovel.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private imovelSevice: ImovelService) {}
  @ViewChild('select') select!: MatSelect;

  ngOnInit() {
    this.formHandling();
    this.buscarTipos();
  }

  searchForm!: FormGroup;
  control = new FormControl('');
  sale!: Boolean;
  tipos!: any[];
  tipoImv: any;
  grupos: any;
  onSubmit() {
    this.formHandling();
    console.warn(this.searchForm.value);
  }

  formHandling() {
    this.grupos = [
      {
        name: 'Residencial',
        tipo: [this.tipos],
      },
    ];

    this.searchForm = this.fb.group({
      lougradouro: [''],
      tipo: [''],
    });
  }

  OnSet() {
    this.sale ? (this.sale = false) : (this.sale = true);
  }

  buscarTipos() {
    this.imovelSevice.buscarTipos().subscribe((res): any => {
      this.tipos = res;
    });
  }

  toggleAllSelection() {
    let checked = document.getElementById('checked');

    if (checked?.ariaChecked) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }
}
