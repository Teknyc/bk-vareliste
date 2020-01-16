import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TellerlistaComponent } from './tellerlista/tellerlista.component';
import { UploaderComponent } from './uploader/uploader.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'upload', component: UploaderComponent },
			{ path: 'tellelista', component: TellerlistaComponent },
			{ path: 'product/:id', component: ProductComponent },

		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
