import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
    { 
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent},
          { path: 'progress', component: ProgressComponent},
          { path: 'grafic1', component: Grafic1Component}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
