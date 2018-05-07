import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public label: string;

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta,
  ) {

    this.label = '';

    this.getDataRoute().subscribe( (data) => {
      console.log(data);
      this.label = data.titulo;
      this.title.setTitle(this.label);

      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.label,
        data: 'graficas, login, escuela, registros'
      };

      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events
      .filter( ( evento ) => evento instanceof ActivationEnd)
      .filter( ( evento: ActivationEnd ) => evento.snapshot.firstChild === null)
      .map( ( evento: ActivationEnd ) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
