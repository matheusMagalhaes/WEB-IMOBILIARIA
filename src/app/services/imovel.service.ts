import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../enviroments/enviroment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ImovelService {
  constructor(private http: HttpClient) {}

  buscarImoveis(): Observable<any> {
    return this.http.get(`${environment.urlBase}imovel/buscar`);
  }
}
