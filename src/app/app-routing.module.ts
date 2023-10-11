import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardImovelComponent } from "./components/card-imovel/card-imovel.component";
import { HomeComponent } from "./components/home/home.component";
import { AnunciarImovelComponent } from "./components/anunciar-imovel/anunciar-imovel.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "locacao", component: CardImovelComponent },
  // { path: "anuncio", component: AnunciarImovelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
