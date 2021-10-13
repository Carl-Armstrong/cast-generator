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
        
        // originally was fetching 50 objects from the api, but changed the limit to 1. Left the for loop in because it's working
        for(let i=0; i < data.length; i++) {
          let face = new IFace(data[i].last_name, data[i].gender, data[i].first_name, data[i].url);
          this.sourceList.push(face);
        }

      });
    });
  }

  ngOnInit(): void {
  }

  getFace(): string {
    // check if nothing was fetched
    if (this.sourceList.length == 0)
    {
      // if json was not fetched, give it a stock image for a face
      return "/assets/generic.png";
    }

    // just uses 0 index because the fetch request was changed to only ask for one
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
