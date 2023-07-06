import { Component } from "@angular/core";
import { ImovelService } from "src/app/services/imovel.service";

@Component({
  selector: "app-vendas",
  templateUrl: "./vendas.component.html",
  styleUrls: ["./vendas.component.css"],
})
export class VendasComponent {
  constructor(private imovelService: ImovelService) {}
  imoveis: any[] = [];

  ngOnInit() {
    this.buscarImoveis();
  }

  buscarImoveis() {
    this.imovelService.buscarImoveis().subscribe((res) => {
      this.imoveis = res;
    });
  }
}
