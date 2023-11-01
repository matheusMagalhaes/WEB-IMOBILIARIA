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
  tipoControl = new FormControl('');

  ngOnInit() {
    this.searchForm = this.fb.group({
      lougradouro: '',
      tipo: this.tipoControl
    });
    this.buscarTipos();
  }

  searchForm!: FormGroup;
  sale!: boolean;
  tipos!: any[];

  onSubmit() {
    console.log(this.searchForm.value);
  }

  OnSet() {
    this.sale ? (this.sale = false) : (this.sale = true);
  }

  buscarTipos() {
    this.imovelSevice.buscarTipos().subscribe((res): any => {
      this.tipos = res;
    });
  }

  toggleAllSelection(event: any) {
    // let checked = document.getElementById('checked');

    if (event.checked) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }
}
