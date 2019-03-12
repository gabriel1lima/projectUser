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
        tap(_ => console.log("create user")),
      );
  }
  
  /* GET - Busca usuário pelo ID */
  getUser(id: number): Observable<{}> {
    return this.http.get<{}>(this.baseUrl + `/${id}`)
      .pipe(
        tap(_ => console.log("get user")),
      );
  }

  /* GET - Busca todos os usuários */
  getUsers(): Observable<[]> {
    return this.http.get<[]>(this.baseUrl)
      .pipe(
        tap(_ => console.log("get users")),
      );
  }

  /* PUT - Edita um usuário */
  updateUser (user: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(user['id']);
    return this.http.put(this.baseUrl + `/${user['id']}`, user, httpOptions).pipe(
      tap(_ => console.log('updated user')),
    );
  }

  /* DELETE - Apaga um usuário */
  deleteUser(idUser: number): Observable<[]> {
    return this.http.delete<[]>(this.baseUrl + `/${idUser}`)
      .pipe(
        tap(_ => console.log("delete user")),
      )
  }


  constructor(private http: HttpClient) { }
}
