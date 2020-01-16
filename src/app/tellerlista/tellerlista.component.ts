import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tellerlista',
  templateUrl: './tellerlista.component.html',
  styleUrls: ['./tellerlista.component.css']
})
export class TellerlistaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scanCompleteHandler(e){
	this.router.navigate(['product', e])
  }
}
