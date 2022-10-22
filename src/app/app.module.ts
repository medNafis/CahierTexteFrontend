import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { DescriptionComponent } from './content/description/description.component';
import { AppRoutingModule } from './app-routing.module';
import { ModulesComponent } from './content/modules/modules.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotesComponent } from './content/notes/notes.component';
import { FormCoursComponent } from './content/form-cours/form-cours.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { AddFiliereComponent } from './admin/add-filiere/add-filiere.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { AddProfComponent } from './admin/add-prof/add-prof.component';
import { ViewFiliereComponent } from './admin/view-filiere/view-filiere.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewModuleComponent } from './admin/view-module/view-module.component';
import {MatTreeModule} from '@angular/material/tree';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    DescriptionComponent,
    ModulesComponent,
    NotesComponent,
    FormCoursComponent,
    LoginComponent,
    HomeComponent,
    AddFiliereComponent,
    AddModuleComponent,
    AddProfComponent,
    ViewFiliereComponent,
    ViewModuleComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
