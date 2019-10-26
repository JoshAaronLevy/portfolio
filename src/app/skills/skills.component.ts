import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: 'skills.component.html',
  providers: [
    SkillsService
  ]
})
export class SkillsComponent implements OnInit {
  loading: boolean;
  skills: any;

  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    private skillService: SkillsService
  ) {
    this.title.setTitle(`Skills | Josh Levy`);
    this.meta.updateTag({name: 'description', content: `Josh Levy Developer Skills`});
  }

  async ngOnInit() {
    this.loading = true;
    this.loadSkills();
  }

  async loadSkills() {
    this.skillService.getSkills().then(data => {
      this.skills = data.skills;
      console.log(this.skills);
      return data;
    });
  }
}
