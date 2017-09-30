import { Component, OnInit, EventEmitter, OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Usuario } from './../domain/usuario';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login-basic',
  templateUrl: './login-basic.component.html',
  styleUrls: ['./login-basic.component.css']
})
export class LoginBasicComponent implements OnInit, OnDestroy {

  public sendLogin = new EventEmitter<Usuario>();

  private formulario: FormGroup;

  exibirLoginInvalido = false;

  private exibir = false;

  constructor(private formBuilder: FormBuilder, private loginService: AuthService) {}

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      j_username: ['wedson2'],
      j_password: ['admin']
    });

    this.loginService.autenticado.subscribe(logon => {
      this.exibir = logon;
      this.exibirLoginInvalido = !logon;
    });

  }

  ngOnDestroy() {
    this.loginService.autenticado.unsubscribe();
  }

  fazerLogin() {
    // console.log(this.formulario.value);
    // this.autService.fazerLoginBasic(this.formulario.value);
    this.loginService.logar(this.formulario.value);
  }

}
