import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardImovelComponent } from "./components/card-imovel/card-imovel.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "locacao", component: CardImovelComponent },
  { path: "login", component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
