import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFiliereComponent } from './admin/add-filiere/add-filiere.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { AddProfComponent } from './admin/add-prof/add-prof.component';
import { HomeComponent } from './admin/home/home.component';
import { ViewFiliereComponent } from './admin/view-filiere/view-filiere.component';
import { ViewModuleComponent } from './admin/view-module/view-module.component';
import { DescriptionComponent } from './content/description/description.component';
import { FormCoursComponent } from './content/form-cours/form-cours.component';
import { ModulesComponent } from './content/modules/modules.component';
import { NotesComponent } from './content/notes/notes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : "modules", component: ModulesComponent},
  { path : "description", component: DescriptionComponent},
  { path : "notes", component: NotesComponent},
  { path : "seance", component: FormCoursComponent},
  { path : "login", component: LoginComponent},
  { path : "", component: LoginComponent},
  { path : "admin/home", component: HomeComponent},
  { path : "admin/addfiliere", component: AddFiliereComponent},
  { path : "admin/addmodule", component: AddModuleComponent},
  { path : "admin/addprof", component: AddProfComponent},
  { path : "admin/viewfiliere", component: ViewFiliereComponent},
  { path : "admin/viewmodule", component: ViewModuleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
