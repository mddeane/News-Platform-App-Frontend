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
import { UserComponent } from './user/user.component';
import { PageCellComponent } from './row/cell/page-cell/page-cell.component';
import { SlugCellComponent } from './row/cell/slug-cell/slug-cell.component';
import { SegmentCellComponent } from './row/cell/segment-cell/segment-cell.component';
import { AnchorCellComponent } from './row/cell/anchor-cell/anchor-cell.component';
import { EstTimeCellComponent } from './row/cell/est-time-cell/est-time-cell.component';
import { ActTimeCellComponent } from './row/cell/act-time-cell/act-time-cell.component';
import { WriterCellComponent } from './row/cell/writer-cell/writer-cell.component';
import { BackTimeCellComponent } from './row/cell/back-time-cell/back-time-cell.component';
import { FrontTimeCellComponent } from './row/cell/front-time-cell/front-time-cell.component';
import { NotesCellComponent } from './row/cell/notes-cell/notes-cell.component';

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
    OnEnterKeyDirective,
    UserComponent,
    PageCellComponent,
    SlugCellComponent,
    SegmentCellComponent,
    AnchorCellComponent,
    EstTimeCellComponent,
    ActTimeCellComponent,
    WriterCellComponent,
    BackTimeCellComponent,
    FrontTimeCellComponent,
    NotesCellComponent
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
