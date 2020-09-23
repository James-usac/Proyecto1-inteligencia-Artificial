import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesSerService } from 'src/app/services/animales-ser.service';
import {Listadto } from '../../models/Listadto'
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  listaAni : Listadto
  constructor(private _route: ActivatedRoute,
    private animalser: AnimalesSerService ) { 
    console.log(this._route.snapshot.paramMap.get('nombre'));
  }

  ngOnInit() {
    this.animalser.getListAnimales(this._route.snapshot.paramMap.get('nombre')).subscribe(data => {
      console.log(data)
      this.listaAni = data;
  });
  }


}
