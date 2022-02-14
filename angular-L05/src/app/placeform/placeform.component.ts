import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})
export class PlaceformComponent implements OnInit {
  model:Places = new Places(); 
  constructor() { }

  ngOnInit() {
  }

  formSubmit(){
    console.log("The Form was submitted successfully!", this.model);
  }

}