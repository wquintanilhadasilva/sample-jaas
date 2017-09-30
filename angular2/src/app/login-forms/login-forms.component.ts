import { Component, OnInit, OnDestroy } from '@angular/core';

import { Usuario } from '../domain/usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})
export class LoginFormsComponent implements OnInit, OnDestroy {

  private exibir = false;

  constructor(private loginService: AuthService) {}

  ngOnInit() {
    this.loginService.autenticado.subscribe(l => this.exibir = l);
  }

  ngOnDestroy() {
    this.loginService.autenticado.unsubscribe();
  }

  public logar() {
    this.loginService.logar({ j_password: 'admin', j_username: 'wedson2'})
  }

}

/**
 *
 * authFormJaas() {
    //console.log(JSON.stringify(this.formulario.value));
    //console.log(this.formulario);
    console.log(this.formulario.value);
     this.http.post('http://pc-wedson-dell:8080/j_security_check', this.formulario.value,
    //this.http.post('http://pc-wedson-dell:8080/sample-jaas/api/demo/login', this.formulario.value,
        this.restConfig.getRequestoptions(this.formulario))
          .subscribe( r => console.log(r));

  }
    basicAuthJaasGetBlog() {
    this.http.get(this.restConfig.getUrl(), { headers: this.restConfig.getHeaders() })
      .toPromise()
      .then(r => r.json())
      .then(r => this.blogs = r);
  }

 *
 */
