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

  salvarImovel(Imovel: any[]): Observable<any> {
    return this.http.post(`${environment.urlBase}imovel/salvar-imovel`, Imovel);
  }

  deletarImovel(id: number) {
    return this.http.delete(`${environment.urlBase}imovel/delete-imovel/${id}`);
  }

  updateImovel(imovel: any[]): Observable<any> {
    return this.http.patch(`${environment.urlBase}imovel/update-imovel`, imovel)
  }
}
