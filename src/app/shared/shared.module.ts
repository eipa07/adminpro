import { NgModule } from '@angular/core';

// Para que funcione *ngFor y no mande error
import { CommonModule } from '@angular/common';

// Para que funcione routerLinkActive y routerLink
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})

export class SharedModule {

}

