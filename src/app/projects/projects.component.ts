import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {

  projectId: string = "";

  submitted: boolean = false;
  notFound: boolean = false;
  results: any = {name: '', first_name: '', last_name: ''};

  constructor(private service: ProjectsService) { }

  ngOnInit(): void {
    this.submitted = false;
  }
  onSubmit() {
    this.service.getProject(this.projectId).then((res: any) => {
      if(!res.error){
        this.results = res;
        this.submitted=true;
        this.notFound = false;
      }else{
        this.notFound = true;
        this.submitted=false;
      }
    }).catch(e => {
      this.notFound = true;
      this.submitted=false;
    })
  }


}
