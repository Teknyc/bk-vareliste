import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-oppsummering',
	templateUrl: './oppsummering.component.html',
	styleUrls: ['./oppsummering.component.css']
})
export class OppsummeringComponent implements OnInit {
	data: any[];
	constructor(private service: AppService) { }

	ngOnInit() {
		this.data = this.service.productList;
	}

}
