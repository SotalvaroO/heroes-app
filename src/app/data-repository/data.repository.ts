import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export abstract class DataRepository<T, ID> {
  public abstract getAll(
    serviceName: string,
    query?: string,
    parameter?: string
  ): Observable<T[]>;

  public abstract getById(serviceName: string, id: ID): Observable<T>;

  public abstract post(serviceName: string, entity: T): Observable<T>;

  public abstract edit(serviceName: string, entity: T, id: ID): Observable<T>;

  public abstract delete(serviceName: string, id: ID): Observable<T>;
}

@Injectable({
  providedIn: 'root',
})
export class GenericDataRepository<T, ID> implements DataRepository<T, ID> {
  private url: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public delete(serviceName: string, id: ID): Observable<T> {
    return this.http.delete<T>(`${this.url}/${serviceName}/${id}`);
  }

  public edit(serviceName: string, entity: T, id: ID): Observable<T> {
    return this.http.put<T>(`${this.url}/${serviceName}/${id}`, entity);
  }

  public post(serviceName: string, entity: T): Observable<T> {
    return this.http.post<T>(`${this.url}/${serviceName}`, entity);
  }
  public getById(serviceName: string, id: ID): Observable<T> {
    return this.http.get<T>(`${this.url}/${serviceName}/${id}`);
  }

  public getAll(
    serviceName: string,
    query: string = '',
    parameter: string = 'q'
  ): Observable<T[]> {
    console.log(query);
    return !parameter && !query
      ? this.http.get<T[]>(`${this.url}/${serviceName}`)
      : this.http.get<T[]>(`${this.url}/${serviceName}?${parameter}=${query}`);
  }
}
