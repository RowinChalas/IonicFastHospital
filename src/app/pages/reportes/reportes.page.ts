import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ConsultaService } from 'src/app/services/consulta.service';
import { FuncioensService } from 'src/app/services/funcioens.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  consultaFecha:cFecha[]=[]
  buscador:string =''
  reporteZodiacal:zodiaco[]=[]
  cantidadConsultasPacientes:cantidadConsulta[]=[]

  slidesOptions={ slidesPerView:1.2  }
  slidesOptions1={ slidesPerView:1.2  }
  slidesOptions2={ slidesPerView:1.2  }
  constructor(private  navController:NavController,
    private menuController:MenuController,  
    private modalConsultaController:ModalController,
    private consultaService:ConsultaService,
    private funcionesService:FuncioensService) { }

  ngOnInit() {
    this.CargarReporteZodiacal()
    this.cargarCantidadConsultas()
  }

  onBackReload(){
    this.modalConsultaController.dismiss()
  }

  
  cargarCantidadConsultas(){
    this.consultaService.cantidadConsulta(localStorage.id)
    .subscribe(d=>{
      let data =d
      this.cantidadConsultasPacientes = data
    })
  }
  
  cambairFecha(){
    this.consultaService.consultaPorFecha(this.funcionesService.fechaStrringDMY(this.buscador),localStorage.id)
    .subscribe(d=>{
      let data = d;
      this.consultaFecha = data
      console.log(this.consultaFecha);
    })
  }



  CargarReporteZodiacal(){  
    this.consultaService.reporteZodiacal(localStorage.id)
    .subscribe(d=>{
      let data =d
      this.reporteZodiacal=data
    
    })
  }

}


interface cFecha
  {
    "Paciente": string,
    "Fecha": string,
    "Motivo_Consulta": string,
    "Numero_Seguro": string,
    "Monto_Pagado": string,
    "Diagnostico": string,
    "Nota": string
  }

  interface zodiaco{
    "Cedula": number,
    "Nombre": string,
    "Apellido": string,
    "Zodiaco": string
  }
interface cantidadConsulta{
  "Cedula": number,
  "Nombre": string,
  "Apellido": string,
  "Email": string,
  "Cantidad": 1
}
