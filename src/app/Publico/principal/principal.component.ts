import { Component, OnInit } from '@angular/core';
import { CorreoService } from 'src/app/Servicio/correo.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  correo: any = {};
 
  constructor(private service: CorreoService) { }

  ngOnInit(): void {
    this.service.getAllCorreos().subscribe(correo => {
      this.correo = correo.result;
    })
  }


}
