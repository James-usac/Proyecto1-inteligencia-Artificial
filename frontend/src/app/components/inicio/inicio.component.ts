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
    { name: 'Aves', value: 'anfibio' },
    { name: 'Reptil', value: 'reptil' },
    { name: 'Moluscos', value: 'moluscos' },
    { name: 'Mamiferos', value: 'mamifero' },
    { name: 'Invertebrado', value: 'invertebrado' },
    { name: 'Vertebrado', value: 'vertebrado' },
    { name: 'Animal Grande', value: 'animalgrande'},
    { name: 'Animal Pequeño', value: 'animalpequeno'},
    { name: 'Animal Rapido', value: 'animalrapido'},
    { name: 'Animal Lento', value: 'animallento'},
    { name: 'Animal Velocidad Normal', value: 'velocidadnormal'},
    { name: 'Sienten', value: 'sienten'},
    { name: 'Vulnerable', value: 'vulnerable'},
    { name: 'No Vulnerable', value: 'novulnerable'},
    { name: 'Tienen Vida', value: 'tienenvida'},
    { name: 'Respiran', value: 'respiran'},
    { name: 'vivenenagua', value: 'vivenenagua'},
    { name: 'ponenhuevos', value: 'ponenhuevos'},
    { name: 'tienenalas', value: 'tienenalas'},
    { name: 'vuelan', value: 'vuelan'}
  ]
  form: FormGroup;
  listAnimales: Animalesdto[];
  listAnimales2: Animalesdto;
  loading = false;
  cadena: string;
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
    if(this.textoDeInput==null){
      resultado.animal = "X";
    }else{
      resultado.animal = this.textoDeInput;
    }
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
        case "vertebrado":
            resultado.vertebrado = "si"
            break;
        case "pez":
          resultado.pez= "si"
          break;
        case "moluscos":
          resultado.moluscos= "si"
          break;
        case "mamifero":
          resultado.mamifero ="si"
          break;
        case "reptil":
          resultado.reptil= "si"
          break;
        case "animalgrande":
          resultado.animalgrande = "si"
          break
        case "animalpequeno":
          resultado.animalpequeno = "si"
          break;
        case  "velocidadnormal":
          resultado.velocidadnormal = "si"
          break;
        case "animalrapido":
          resultado.animalrapido = "si"
          break;
        case "animallento":
          resultado.animallento = "si"
          break;
        case "sienten":
          resultado.sienten = "si"
          break
        case "vulnerable":
          resultado.vulnerable = 'si'
          break
        case "novulnerable":
          resultado. novulnerable = "si"
          break
        case "tienenvida":
          resultado.tienenvida = "si"
          break
        case "respiran":
          resultado.respiran = "si"
          break
        case "vivenenagua":
          resultado.vivenenagua = "si"
          break
        case "ponenhuevos":
          resultado.ponenhuevos = "si"
          break
        case "tienenalas":
          resultado.tienenalas = "si"
          break
        case "vuelan":
          resultado.vuelan = "si"
          break
      }
    });
    
    this.animalser.guardaranimales(resultado).subscribe(data => {
        console.log(data)
        this.textoDeInput = null
        this.listAnimales = data.Lista_animales
        this.loading = false;
    });
  }
}
