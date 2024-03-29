import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;
  public nombreUsuario: string | null;

  constructor(private router: Router) {
    this.miToken = 0;
    this.nombreUsuario = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      this.miToken = +localStorage.getItem('miTokenPersonal')!;
    }

    if (localStorage.getItem('miTokenPersonal')) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
    }
  }

  public logout(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      localStorage.removeItem('miTokenPersonal');

      this.router.navigate(['/login']);
    }
  }

}
