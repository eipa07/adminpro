import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  public menu: Array<any>;

  constructor() {
    this.menu = [
      {
        titulo: 'Principal',
        icono: 'mdi mdi-gauge',
        submenu: [
          { titulo: 'Dashboard', url: '/dashboard' },
          { titulo: 'ProgressBar', url: '/progress' },
          { titulo: 'Graficas', url: '/graficas1' }
        ]
      }
    ];

  }

}