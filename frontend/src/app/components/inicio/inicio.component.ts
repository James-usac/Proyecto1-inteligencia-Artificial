import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Animalesdto } from '../../models/Animalesdto';
import { AnimalesSerService } from 'src/app/services/animales-ser.service';
import { consultadto } from 'src/app/models/consultadto';

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
  
    constructor(private fb: FormBuilder) {
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
        default:
          // code block
      }
    });
    console.log(resultado)
  }
}
