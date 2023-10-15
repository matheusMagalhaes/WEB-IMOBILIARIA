import { Component, EventEmitter, Output } from "@angular/core";
import { ImovelService } from "src/app/services/imovel.service";

@Component({
  selector: "app-card-imovel",
  templateUrl: "./card-imovel.component.html",
  styleUrls: ["./card-imovel.component.css"],
})
export class CardImovelComponent {
  constructor(private imovelService: ImovelService) {}

  imoveis: any;
  @Output() imovelSelcionado = new EventEmitter<any>();
  ngOnInit() {
    this.buscarTodosImoveis();
  }

  buscarTodosImoveis() {
    this.imovelService.buscarImoveis().subscribe((res) => {
      this.imoveis = res;
    });
  }

  deletar(id: number) {
    this.imovelService.deletarImovel(id).subscribe(() => {});
  }

  editar(imovel: any) {}
}
