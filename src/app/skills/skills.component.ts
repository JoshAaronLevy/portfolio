import { Component } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: 'skills.component.html'
})
export class SkillsComponent {

  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle(`Skills | Josh Levy`);
    this.meta.updateTag({name: 'description', content: `Josh Levy Developer Skills`});
  }
}
