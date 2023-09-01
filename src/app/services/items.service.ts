import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Items } from '../models/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemSource: string = "http://localhost:3000/itemsList";
  
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.itemSource);
  }

  getItemByID(id: number): Observable<Items> {
    return this.http.get<Items>(this.itemSource + "/"+ id);
  }

  AddItem(newItem: Items): Observable<Items> {
    return this.http.post<Items>(this.itemSource, newItem);
  }

  
}
