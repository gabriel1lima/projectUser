import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "http://localhost:3000/users";

  /* POST - Cria usuário */
  addUser(user: Object): Observable<[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<[]>(this.baseUrl, user, httpOptions)
      .pipe(
        tap(_ => {}),
      );
  }
  
  /* GET - Busca usuário pelo ID */
  getUser(id: number): Observable<{}> {
    return this.http.get<{}>(this.baseUrl + `/${id}`)
      .pipe(
        tap(_ => {}),
      );
  }

  /* GET - Busca todos os usuários */
  getUsers(): Observable<[]> {
    return this.http.get<[]>(this.baseUrl + '?_sort=favorite&_order=desc')
      .pipe(
        tap(_ => {}),
      );
  }

  /* PUT - Edita um usuário */
  updateUser (user: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.baseUrl + `/${user['id']}`, user, httpOptions).pipe(
      tap(_ => {}),
    );
  }

  /* PUT - Difine usuário como favorito */
  favoriteUser (user: object): Observable<any> {
    user['favorite'] = !user['favorite']
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.baseUrl + `/${user['id']}`, user, httpOptions).pipe(
      tap(_ => {}),
    );
  }

  /* DELETE - Apaga um usuário */
  deleteUser(idUser: number): Observable<[]> {
    return this.http.delete<[]>(this.baseUrl + `/${idUser}`)
      .pipe(
        tap(_ => {}),
      )
  }


  constructor(private http: HttpClient) { }
}
