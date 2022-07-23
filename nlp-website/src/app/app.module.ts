import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SeminarsComponent } from './components/seminars/seminars.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { PeopleComponent } from './components/people/people.component';
import { TeachingComponent } from './components/teaching/teaching.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationsComponent,
    SeminarsComponent,
    ProjectsComponent,
    DatasetsComponent,
    PeopleComponent,
    TeachingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
