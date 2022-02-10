import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

// add the following import statement:
import { SkillsService } from './services/skills.service';

@NgModule({
  declarations: [AppComponent, SkillsComponent],
  imports: [BrowserModule],
  // add SkillsService to the providers array:
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}