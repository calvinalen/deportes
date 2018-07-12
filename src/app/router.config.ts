import {Route} from '@angular/router';
//import { HttpComponent } from './proveedor/http/http.component';
//import { ProveedoresComponent } from './proveedor/proveedores/proveedores.component';
//import {CreateComponent} from '../app/components/create/create.component';
import {DeportesListComponent} from '../app/componentes/deportes/deportes-list/deportes-list.component';
import {DeporteComponent} from '../app/componentes/deportes/deporte/deporte.component';
import {HomeComponent} from '../app/componentes/deportes/home/home.component';
export const RouterConfig: Route[]=[
{path: 'home', component: HomeComponent},
{path: 'usuario', component: DeporteComponent},
//{path: 'registro', component: HttpComponent},
//{path: 'login', component: HttpComponent}
//{path: '', redirectTo: 'home', pathMatch:"full"},
//{path: '**', redirectTo:'home'}

]