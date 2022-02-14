import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './core/layout/full/full.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'util',
		component: FullComponent,
		canActivate: [],
		// resolve:{data:}
		children: [
			{
				path: '',
				loadChildren: () => import('./modules/test/test-routing.module').then((m) => m.TestRoutingModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
