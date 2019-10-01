import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private st: DataService,private fb:FormBuilder) { }

  ngOnInit() {
  }

}
