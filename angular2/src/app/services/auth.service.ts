import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

import { RestConfig } from './rest-config';
import { Usuario } from './../domain/usuario';

@Injectable()
export class AuthService {

  private LOGGED = 'LOGADO';

  public autenticado = new EventEmitter<boolean>();

  public usuario: string;

  constructor(private router: Router, private http: Http) {}

  public logar(usuario: Usuario) {

    const url = 'http://localhost:8080/sample-jaas/j_security_check';
    const body = `j_username=${usuario.j_username}&j_password=${usuario.j_password}`;

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = new RequestOptions({ headers: headers });

    console.log(body);
    console.log(options);

    sessionStorage.removeItem(this.LOGGED);

    this.http.post(url, body, options).subscribe(
      res => {
        console.log('res = ' + res);
        console.log(res.headers.keys());
        const h = res.headers;
        this.usuario = usuario.j_username;
        this.autenticado.emit(true);
        sessionStorage.setItem(this.LOGGED, this.LOGGED);
      },
      err => {
        console.log('err = ' + err);
        this.autenticado.emit(false);
      }
    );
  }

  public isAuthenticate(): boolean {
    return sessionStorage.getItem(this.LOGGED) === this.LOGGED;
  }
}

/*
  private loginKey = 'isLoggedIn';
  private userKey = 'userKey';
  private loginKeyValueTrue = 'true';
  private loginKeyValueFalse = 'false';

  usuarioAutenticadoEmiter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: Http, private restConfig: RestConfig) { }

  private sendToHome() {
    this.router.navigate(['/home']);
  }

  public fazerLoginBasic(usuario: Usuario) {

    if (!this.checkNullOrEmpty(usuario)) {

      this.http.post(this.restConfig.getUrlRest('login'),
          usuario,
          this.restConfig.getRequestoptionsBasic(usuario))
        .map(response => response)
        .subscribe(
          r => {
            sessionStorage.setItem(this.userKey, usuario.j_username);
            console.log(r);
            sessionStorage.setItem(this.loginKey, this.loginKeyValueTrue);
            this.usuarioAutenticadoEmiter.emit(true);
            this.sendToHome();
          }
        );

    } else {

      sessionStorage.setItem(this.loginKey, this.loginKeyValueFalse);
      this.usuarioAutenticadoEmiter.emit(false);

    }
  }

  public getUserName(): string {
    return sessionStorage.getItem(this.userKey);
  }

  fazerLogin(usuario: Usuario) {

    if (!this.checkNullOrEmpty(usuario)) {

      sessionStorage.setItem(this.loginKey, this.loginKeyValueFalse);
      this.usuarioAutenticadoEmiter.emit(false);

    } else {

      // TODO Injetar o serviço e validar no servidor...
      if (usuario.j_username === 'usuario@email.com' && usuario.j_password === '123456') {
        sessionStorage.setItem(this.loginKey, this.loginKeyValueTrue);
        this.usuarioAutenticadoEmiter.emit(true);
        this.router.navigate(['/']);
      } else {
        sessionStorage.setItem(this.loginKey, this.loginKeyValueFalse);
        this.usuarioAutenticadoEmiter.emit(false);
      }

    }

  }

  checkNullOrEmpty(usuario: Usuario): boolean {

    if (usuario === null) {
      return true;
    }

    if (usuario.j_username === null || usuario.j_username === '') {
      return true;
    }

    if (usuario.j_password === null || usuario.j_password === '') {
      return true;
    }

    return false;

  }

  usuarioEstaAutenticado(): boolean {
    const logado = sessionStorage.getItem(this.loginKey);
    console.log(logado);
    return true; // logado === this.loginKeyValueTrue ? true : false;
  }

  */
