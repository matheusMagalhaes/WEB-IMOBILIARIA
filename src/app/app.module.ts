import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToastrModule } from "ngx-toastr";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgxMaskModule } from "ngx-mask";
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { MatCardModule } from "@angular/material/card";
import { CardImovelComponent } from './components/card-imovel/card-imovel.component';
import { HomeComponent } from './components/home/home.component';
import { AnunciarImovelComponent } from './components/anunciar-imovel/anunciar-imovel.component';
import { RealPipe } from "./pipes/real.pipe";

@NgModule({
  declarations: [AppComponent, HeaderNavComponent, CardImovelComponent, HomeComponent, AnunciarImovelComponent, RealPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
