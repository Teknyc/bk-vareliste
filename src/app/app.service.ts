import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	productList: any[] = [
		{
			Varenr: 3070,
			Produkt: "Fanta Orange 10L",
			Unit: "LTR",
			K: 10,
			Kommentar: "10 L Fanta BIB"
		},
		{
			Varenr: 2512358,
			Produkt: "Whopper kjøtt 113g",
			Unit: "STK",
			K: 88,
			A: 44,
			Kommentar: "2 poser a 44 kjøtt pr kasse",
		},
		{
			Varenr: 3088135,
			Produkt: "Bacon",
			Unit: "KG",
			K: 6,
			Kommentar: "6 pakker a 1 kilo pr kasse",
		},
		{
			Varenr: 1495498,
			Produkt: "Pommes Frites",
			Unit: "KG",
			K: 10.8,
			A: 2.7,
			Kommentar: "4 poser a 2,7 kilo pr kasse",
		},
		{
			Varenr: 4910220,
			Produkt: "Drikkebeger 0,4L",
			Unit: "STK",
			K: 880,
			A: 44,
			Kommentar: "22 ruller a 44 kopper pr kasse",
		},
		{
			Varenr: 3147436,
			Produkt: "Papir Steakhosue",
			Unit: "STK",
			K: 2000,
			A: 1000,
			Kommentar: "2 pakker a 1000 stk I en kasse"
		}
	]

	constructor() { }

}
