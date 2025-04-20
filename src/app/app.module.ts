import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,  routingComponents, } from './app-routing.module';
import { AppComponent  } from './app.component';
import { AboutComponent } from './about/about.component';

import { RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { LandingComponent } from './landing/landing.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ConnectComponent } from './connect/connect.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    ExperienceComponent,
    LandingComponent,
    EducationComponent,
    ProjectsComponent,
    ExpertiseComponent,
    ConnectComponent,
    SideNavComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,AboutComponent,ExperienceComponent]
})
export class AppModule { }
