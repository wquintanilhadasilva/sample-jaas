import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';

import { Usuario } from './../domain/usuario';

@Injectable()
export class RestConfig {

  private userKey: string;

  getUrlRest(service: string) {
    // return 'http://pc-wedson-dell:8080/sample-jaas/j_security_check'; // pc-wedson-dell:8080/sample-jaas/api/demo/blog';
    return this.getUrl(`api/demo/${service}`);
  }

   getUrl(service: string) {
    // return `http://pc-wedson-dell:8080/sample-jaas/${service}`;
    return `http://localhost:8080/sample-jaas/${service}`;
  }

  public getUrlAuthenticate() {
    return '';
  }

  public getHeadersForm(): Headers {
    /* let username: string = 'hans';
        let password: string = 'knaut';
        */
    const headers = new Headers();
    this.setContentTypeForm(headers);
    return headers;
  }

  public getHeaders(): Headers {
    const headers = new Headers();
    this.setContentTypeJson(headers);
    return headers;
  }

  public getHeadersBasic(): Headers {
    /* let username: string = 'hans';
        let password: string = 'knaut';

        let username: string = 'wedson2';
        let password: string = 'admin';
        this.userKey = `Basic ${btoa(usuario.j_username + ':' + usuario.j_password)}`;
    */
    const headers = new Headers();
    headers.append(
      'Authorization', this.userKey
    );
    this.setContentTypeJson(headers);
    return headers;
  }

  public getUserKey() {
    return this.userKey;
  }

  private setContentTypeJson(headers: Headers) {
    headers.append('content-type', 'application/json');
  }

  private setContentTypeForm(headers: Headers) {
    headers.append('content-type', 'application/x-www-form-urlencoded');
  }

  public getRequestoptionsForm() {
    return new RequestOptions({
      headers: this.getHeaders()
    });
  }

  public getRequestoptionsBasic(usuario: Usuario) {

    this.userKey = `Basic ${btoa(usuario.j_username + ':' + usuario.j_password)}`;

    return new RequestOptions({
      headers: this.getHeadersBasic()
    });
  }

  public getRequestoptionsBasic2() {

    return new RequestOptions({
      headers: this.getHeadersBasic()
    });
  }

  public getRequestoptions() {
    return new RequestOptions({
      // method: RequestMethod.Post,
      // url: 'http://pc-wedson-dell:8080/sample-jaas/j_security_check',
      // url: 'pc-wedson-dell:8080/sample-jaas/api/demo/login',
      headers: this.getHeaders()
      // ,body: data
    });
  }
}
