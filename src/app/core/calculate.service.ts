import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  url: string = '../../assets/data/data.json';

  constructor(private http: HttpClient) { }

  getNumbers(): Observable<Array<number>> {
    return this.http.get<Array<number>>(this.url);
  }
}
