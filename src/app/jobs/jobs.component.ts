import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { JobsService } from '../services/jobs.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.component.html',
  providers: [
    JobsService,
    MessageService
  ]
})
export class JobsComponent implements OnInit {
  loading: boolean;
  jobs: any;
  rowdata: any;
  columns: any = [];
  job: any;
  selectedJob: any;
  displayJob: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    private jobsService: JobsService,
    private messageService: MessageService
  ) {
    this.title.setTitle(`Jobs | Josh Levy`);
    this.meta.updateTag({name: 'description', content: `Josh Levy Developer Jobs`});
  }

  async ngOnInit() {
    this.loading = true;
    this.loadJobs();
  }

  async loadJobs() {
    this.jobsService.getJobs().then(data => {
      this.jobs = data.jobs;
      console.log(this.jobs);
      return data;
    });
  }

  selectJobWithButton(job) {
    this.selectedJob = job;
    console.log(this.selectedJob);
    this.displayJob = true;
  }
}
