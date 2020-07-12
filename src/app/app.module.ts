import { RouterModule} from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'

import { AppComponent } from './app.component';
import { BandTableComponent } from './band-table/band-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BandService } from './services/band.service';
import { BandDialogComponent } from './dialog/band-dialog/band-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const Routes = [{path: '', component: BandTableComponent}, ];

@NgModule({
  declarations: [
    AppComponent, BandTableComponent, BandDialogComponent
  ],
  imports: [
    BrowserModule, 
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
