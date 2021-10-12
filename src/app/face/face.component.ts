import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFace } from './faceObject';


@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  sourceList: IFace[];

  constructor(
  ) { 
    this.sourceList = [];
    let facesUrl = 'https://tinyfac.es/api/data?limit=1&quality=0';

    window.fetch(facesUrl).then( (response) => {
      response.json().then( (data: string | any[]) => {
        
        for(let i=0; i < data.length; i++) {
          let face = new IFace(data[i].last_name, data[i].gender, data[i].approved, data[i].first_name, data[i].updated_at, data[i].created_at, data[i].url, data[i].id, data[i].source);
          this.sourceList.push(face);
        }

      });
    });
  }

  ngOnInit(): void {
  }

  getFace(): string {
    let displayFace = this.sourceList[0].url;
    return displayFace;
  }
  
  // async getFace()
  // {
  //   let facesReturned;

  //   facesReturned = await fetch('https://tinyfac.es/api/data?limit=50&quality=0').then(function (response) {
  //     if (response.status >= 400) {
  //       throw new Error ("Bad response");
  //     }else {
  //       return response.json();
  //     }
  //   })

  //   return facesReturned;
  // }

  // pickFace(jsonData: any) {
  //   let index: number = Math.floor(Math.random() * jsonData.length);
  //   return jsonData[index];
  // }
}
