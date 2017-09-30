import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';

import { RestConfig } from './rest-config';


@Injectable()
export class BlogService {

  constructor(private http: Http, private restConfig: RestConfig) { }

  public getBlogs(): Observable<any> {
    const head = new Headers();
    head.set('Content-Type', 'application/json;charset=UTF-8');
    // head.set('Authorization', 'Basic ' + btoa('wedson2:admin'));

    return this.http.get(this.restConfig.getUrlRest('blog'), new RequestOptions({
          headers: head
        }))
        .map(response => response.json());
  }

}
