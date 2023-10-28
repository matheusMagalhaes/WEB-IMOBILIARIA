import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImovelService } from 'src/app/services/imovel.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private imovelSevice: ImovelService) {}

  ngOnInit() {
    this.formHandling();
    this.buscarTipos();
  }

  searchForm!: FormGroup;
  control = new FormControl('');
  sale!: Boolean;
  tipos: any;
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

  toggleAllSelection() {}
}
