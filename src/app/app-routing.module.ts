import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { DisplayAllSkillsComponent } from './display-all-skills/display-all-skills.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: 'about', 'title': "About", component: HomeComponent },
  { path: 'experience', 'title': "Experience", component: ExperienceComponent },
  { path: 'add-skill', 'title': "Add Skill", component: AddSkillComponent },
  { path: 'technical-skills', 'title': "Skills", component: DisplayAllSkillsComponent },
  { path: 'education', 'title': "Education and Certifications", component: EducationComponent },
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
