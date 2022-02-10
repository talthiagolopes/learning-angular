import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../shared/services/login.service';
import { Usuario } from './../../shared/classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    private loginService: LoginService,
    private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  public submit(): void {

    this.loginService.login(this.usuario).subscribe(
      (data: number) => {
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        localStorage.setItem('miTokenPersonal',`${ data }`);

        this.router.navigate(['/listado']);
      },
      (error: Error) => {
        console.error("Error al realizar el acceso");
      }
    )
  }

}
