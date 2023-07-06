import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendasComponent } from "./components/vendas/vendas.component";
import { LocacaoComponent } from "./components/locacao/locacao.component";

const routes: Routes = [
  { path: "venda", component: VendasComponent },
  { path: "locacao", component: LocacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
