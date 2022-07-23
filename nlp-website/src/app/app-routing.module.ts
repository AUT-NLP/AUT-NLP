import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SeminarsComponent } from './components/seminars/seminars.component';
import { TeachingComponent } from './components/teaching/teaching.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'NLP Lab | Home' } },
  { path: 'teaching', component: TeachingComponent, data: { title: 'NLP Lab | Teaching' } },
  { path: 'publications', component: PublicationsComponent, data: { title: 'NLP Lab | Publications' } },
  { path: 'seminars', component: SeminarsComponent, data: { title: 'NLP Lab | Seminars' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'NLP Lab | Projects' } },
  { path: 'datasets', component: DatasetsComponent, data: { title: 'NLP Lab | Datasets' } },
  { path: 'people', component: PeopleComponent, data: { title: 'NLP Lab | People' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
