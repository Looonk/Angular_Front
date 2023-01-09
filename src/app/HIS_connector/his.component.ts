import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css']
})


export class HISComponent implements OnInit {

  public protectedData: any
  public loading: boolean = false

  constructor(
    private _api: ApiService,

  ) { }

  ngOnInit(): void {
  }

  startHL7Service() {
    console.log("start");
    this._api.postType2Request("hl7", "HCENube").subscribe((res: any) => {
      if (res=="NO App") {
        Swal.fire('Informacion', 'El servicio de mensajeria HL7 ya se encuentra en ejecucion', 'info');
      }
      else{
        console.log(res);
        Swal.fire('Inicializacion terminada', 'El servicio de mensajeria HL7 se ha iniciado correctamente', 'success');
      }
    },

      (error: any) => {
        console.log(error);
        Swal.fire('Error', 'Inicializacion fallida', 'error');

      });

    console.log("end");
  }



}
