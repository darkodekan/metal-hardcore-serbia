import { BandDialogComponent } from '../dialog/band-dialog/band-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Band } from '../models/band.model';
import { BandService } from '../services/band.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-band-table',
  templateUrl: './band-table.component.html',
  styleUrls: ['./band-table.component.css']
})
export class BandTableComponent implements OnInit {

  displayedColumns=['name', 'genre', 'location'];
  dataSource: MatTableDataSource<Band>;
  database: BandService | null;
  
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  
  constructor(public httpClient: HttpClient, public bandService: BandService,
    
    public dialog: MatDialog) { }

  public openDialog(flag: number, id: number, name: string, genre: string, location: string){
    const dialogRef = this.dialog.open(BandDialogComponent, {data: { id:id, name:name, genre:genre, location:location }});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        this.loadData();
      }

    })
  }
  ngOnInit(): void {
    this.loadData()
  }

  public loadData(){
    this.bandService.getAllBand().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property){
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
