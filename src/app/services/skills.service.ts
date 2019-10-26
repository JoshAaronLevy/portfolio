import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills: Skill;

  constructor(
    private http: HttpClient
  ) {}

  getSkills() {
    const url = environment.api.skills.getAll;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  getSkill(
    slug: string
  ) {
    const mapObj = {
      '{slug}': slug
    };
    const url = environment.api.skills.getOne.replace(/{slug}/gi, function (matched) {
      return mapObj[matched];
    });
    return this.http.get(url)
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
    const url = environment.api.skills.post;
    return this.http.post<any>(url, params)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  updateSkill(
    params: HttpParams = new HttpParams(),
    id: any
  ) {
    const mapObj = {
      '{id}': id
    };
    const url = environment.api.skills.put.replace(/{id}/gi, function (matched) {
      return mapObj[matched];
    });
    return this.http.put<any>(url, params)
      .toPromise()
      .then(res => {
        return res;
      });
  }
}