import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProject(projectId){
    return new Promise((resolve, reject) => {
      fetch(`https://my.api.mockaroo.com/project.json?id=${projectId}`, {
        headers: {
          type: 'application/json',
          accept: 'application/json',
          'X-API-Key': 'd7e064c0'
        }
      })
      .then(res => res.json())
      .then(res => {
        resolve(res);
      }).catch(reject)
    })
  }
}
