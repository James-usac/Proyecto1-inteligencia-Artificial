import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Animalesdto } from '../../models/Animalesdto';
import { AnimalesSerService } from 'src/app/services/animales-ser.service';
import { consultadto } from 'src/app/models/consultadto';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
  Data: Array<any> = [
    { name: 'Longevidad Baja', value: 'longevidadb' },
    { name: 'Longevidad Normal', value: 'longevidadn' },
    { name: 'Longevidad Alta', value: 'longevidada' },
    { name: 'Pez', value: 'pez' },
    { name: 'Anfibio', value: 'anfibio' },
    { name: 'Reptil', value: 'reptil' },
    { name: 'Invertebrado', value: 'invertebrado' },
    { name: 'Vertebrado', value: 'vertebrado' }
  ]
  form: FormGroup;
  listAnimales: Animalesdto[];
  listAnimales2: Animalesdto;
  loading = false;
  textoDeInput: string = null;
    constructor(private fb: FormBuilder,
       private animalser: AnimalesSerService,
       private router: Router) {
      this.form = this.fb.group({
        checkArray: this.fb.array([])
      })
    }
  ngOnInit() {
    this.listAnimales2 = new Animalesdto();
    this.listAnimales2.nombre = "leon";
    this.listAnimales2.nombre_cientifico = "leon x";
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    this.loading = true;
    //enviar peticion
    var resultado = new consultadto();
    this.listAnimales = [this.listAnimales2]
    //console.log(this.form.)
    
    this.form.value.checkArray.forEach(element => {
      switch(element) {
        case "longevidadb":
          resultado.longevidadb = "si"
          break;
        case "longevidadn":
          resultado.longevidadn = "si"
          break;
        case "longevidada":
          resultado.longevidada = "si"
          break;
        case "anfibio":
          resultado.anfibio = "si"
          break;
        case "invertebrado":
          resultado.invertebrado = "si"
          break;
        case "pez":
          resultado.pez= "si"
          break;
        case "reptil":
          resultado.reptil= "si"
          break;
      }
    });
    if(this.textoDeInput==null){
      resultado.animal = "X";
    }else{
      resultado.animal = this.textoDeInput;
    }
    this.animalser.guardaranimales(resultado).subscribe(data => {
        console.log(data)
        this.textoDeInput = null
        this.listAnimales = data.Lista_animales
        this.loading = false;
    });
  }
}
