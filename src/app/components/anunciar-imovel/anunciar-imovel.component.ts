import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CepService } from "src/app/services/cep.service";
import { ImovelService } from "src/app/services/imovel.service";

@Component({
  selector: "app-anunciar-imovel",
  templateUrl: "./anunciar-imovel.component.html",
  styleUrls: ["./anunciar-imovel.component.css"],
})
export class AnunciarImovelComponent {
  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private imovelService: ImovelService
  ) {}

  imovelForm!: FormGroup;
  currencyValue!: any;


  ngOnInit() {
    this.formValidation();
  }

  formValidation() {
    this.imovelForm = this.formBuilder.group({
      descricao: [null, Validators.required],
      tipoImovel: [null, Validators.required],
      valorAluguel: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        uf: [null, Validators.required],
      }),
      qtdDormitorio: [null, Validators.required],
      qtdBanheiro: [null, Validators.required],
      qtdSuites: [null, Validators.required],
      metrosQuadrados: [null, Validators.required],
      observacao: [null],
    });
  }

  buscarEnderecoPorCep() {
    let cep = this.imovelForm.get("endereco.cep")!.value;
    if (cep != null && cep !== "") {
      this.cepService?.consultaCep(cep)?.subscribe((data: any) => {
        this.preencherForm(data);
      });
    }
  }

  preencherForm(data: any) {
    this.imovelForm.patchValue({
      endereco: {
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      },
    });
  }

  salvarImovel() {
    this.imovelService.salvarImovel(this.imovelForm.value).subscribe(() => {});
  }
  formatCurrency() {
    // Remove any non-digit characters
    let numericValue = this.currencyValue.toString().replace(/[^\d.]/g, '');

    // Format the value with currency symbol and commas
    this.currencyValue = parseFloat(numericValue).toFixed(2);
  }

}
