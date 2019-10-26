import { Component, OnInit } from '@angular/core';
import { Creds } from 'private/private';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from '../services/skills.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-add-skill',
  templateUrl: 'add-skill.component.html',
  providers: [
    SkillsService,
    MessageService
  ]
})
export class AddSkillComponent implements OnInit {
  focus: any;
  focus1: any;
  loginError: boolean;
  creds: any = Creds;
  addSkill: FormGroup;
  formval: any;
  approved: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private router: Router,
    private skillsService: SkillsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    if (!sessionStorage.username || sessionStorage.username !== this.creds.username) {
      this.approved = false;
      this.router.navigate(['/login']);
    } else {
      this.approved = true;
    }
    this.addSkill = this.formBuilder.group({
      name: '',
      img: '',
      category: ''
    });
  }

  // post(): void {
  //   console.log(this.addSkill.value);
  //   if (this.approved = true) {
  //     this.skillsService.addSkill(this.addSkill.value).then(res => {
  //       console.log(res);
  //       if (res) {
  //         this.addSingle();
  //       } else {
  //         console.log(res);
  //       }
  //       return res;
  //     });
  //   }
  // }

  post(): void {
    console.log(this.addSkill.value);
    if (this.approved = true) {
      this.skillsService.postSkill(this.addSkill.value).subscribe(res => {
        console.log(res);
        if (res) {
          this.addSingle();
        } else {
          console.log(res);
        }
        return res;
      });
    }
  }

  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successfully added skill!'
    });
  }
}
