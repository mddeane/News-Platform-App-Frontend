import { AddRundownComponent } from './rundown/add-rundown/add-rundown.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RundownComponent } from './rundown/rundown.component';
import { TodayRundownsComponent } from './rundown/today-rundowns/today-rundowns.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'rundown', component: RundownComponent },
  { path: 'add-rundown', component: AddRundownComponent },
  { path: 'today-rundowns', component: TodayRundownsComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
