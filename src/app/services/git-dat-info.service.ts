import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitDatInfoService {

constructor(private http: HttpClient) { }

endpointURL: string = 'https://pokeapi.co/api/v2/';

searchPokemon(name: string): Observable<any> {
  return this.http.get<any>(this.endpointURL + 'pokemon/' + name.toLowerCase())
}

}
