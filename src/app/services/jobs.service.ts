import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const apiUrl = `${environment.apiUrl}/jobs`;

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs: Job;

  constructor(
    private http: HttpClient
  ) {}

  getJobs() {
    return this.http.get(apiUrl)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  getJob(id) {
    return this.http.get(apiUrl, id)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  }

  addJob(
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

  updateJob(
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
