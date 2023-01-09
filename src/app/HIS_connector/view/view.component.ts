import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  questionSet!: any;
  htmlData: any;

  constructor(
    private _api: ApiService,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {

    /*
    this.htmlData = this._api.getType2Request("/ehr/");

    const parser = new DOMParser();
    const xml = parser.parseFromString(this.htmlData, 'application/xml');
    console.log(xml);

    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.questionSet); // this line bypasses angular scurity
    //this.htmlData = this.questionSet;
    console.log(this.htmlData);
    


    this._api.getType2Request('/ehr/') .map((res: { text: () => any; }) => JSON.parse(xml2json(res.text(),'  ')));
     
    }, 
     */

  }
 



}




function xml2json(arg0: any, arg1: string): string {
  throw new Error('Function not implemented.');
}

