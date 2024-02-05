import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private correosSuper = ''//ruta de la api
  constructor(private http:HttpClient) { }

  public getAllCorreos():Observable<any>{
    return this.http.get(this.correosSuper);
  }
}
