import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	productId;
	data: any[];
	product;

	constructor(private router: ActivatedRoute, private service: AppService) { }

	ngOnInit() {
		this.productId = this.router.snapshot.params.id;
		this.data = this.service.productList;
		this.product = this.data.find(product => product.Varenr == this.productId);
	}


}
