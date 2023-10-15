import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardImovelComponent } from "./components/card-imovel/card-imovel.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "locacao", component: CardImovelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
