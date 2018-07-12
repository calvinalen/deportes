import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { DeportesComponent } from './componentes/deportes/deportes.component';
import { DeportesListComponent } from './componentes/deportes/deportes-list/deportes-list.component';
import { DeporteComponent } from './componentes/deportes/deporte/deporte.component';
// services
import { DeportesService } from './services/deportes.service';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './router.config';
import { HomeComponent } from './componentes/deportes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DeportesComponent,
    DeportesListComponent,
    DeporteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [
    DeportesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//I first uninstalled firebase and angularfire2 with:

//npm uninstall firebase
//npm uninstall angularfire2
//And then reinstalled again with:

//npm install firebase@4.12.1
//npm install angularfire2@5.0.0-rc.6
//Using ^ in the versions actually installed angularfire2@5.0.0-rc.9 so I just removed that part.

