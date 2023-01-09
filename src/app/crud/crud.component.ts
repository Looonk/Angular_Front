import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


export class CrudComponent implements OnInit {

  public protectedData: any
  public loading: boolean = false

  constructor(
    private _api: ApiService,

  ) { }

  ngOnInit(): void {


  }



}
