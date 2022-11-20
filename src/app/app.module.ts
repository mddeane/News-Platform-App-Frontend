import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RundownComponent } from './rundown/rundown.component';
import { RowComponent } from './row/row.component';
import { OnEscKeyDirective } from './directives/on-esc-key.directive';
import { OnEnterKeyDirective } from './directives/on-enter-key.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarLeftComponent,
    MainContentComponent,
    DashboardComponent,
    MaintenanceComponent,
    RundownComponent,
    RowComponent,
    OnEscKeyDirective,
    OnEnterKeyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
