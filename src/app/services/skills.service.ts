import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const apiUrl = `${environment.apiUrl}/skills`;

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill;

  constructor(
    private http: HttpClient
  ) {}

  getSkills() {
    return this.http.get(apiUrl)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  getSkill(id) {
    return this.http.get(apiUrl, id)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  addSkill(
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

  postSkill(
    params: HttpParams = new HttpParams()
  ) {
    return this.http.post<any>(apiUrl, params)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }

  updateSkill(
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
