import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../../shared/model/configuration';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private http: HttpClient) { }

  build(config: Configuration): Observable<Blob> {
    return this.http.post('api/build', config, {responseType: 'blob'});
  }
}
