import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const apiUrl = `${environment.apiUrl}/projects`;

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project;

  constructor(
    private http: HttpClient
  ) {}

  getProjects() {
    return this.http.get(apiUrl)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  getProject(id) {
    return this.http.get(apiUrl, id)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  addProject(
    params: HttpParams = new HttpParams()
  ) {
    return this.http.post(apiUrl, params)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  updateProject(
    params: HttpParams = new HttpParams(),
    id
  ) {
    return this.http.put(apiUrl, params)
      .toPromise()
      .then(res => {
        return res;
      });
  }
}
