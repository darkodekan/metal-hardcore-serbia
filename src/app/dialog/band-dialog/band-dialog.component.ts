import { Component, OnInit, Inject } from '@angular/core';
import { BandService } from 'src/app/services/band.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-band-dialog',
  templateUrl: './band-dialog.component.html',
  styleUrls: ['./band-dialog.component.css']
})
export class BandDialogComponent implements OnInit {

  public flag: number
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BandDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public bandService: BandService) { }
    public add(): void {
      this.bandService.addBand(this.data);
      this.snackBar.open("Uspešno dodat bend: " + this.data.naziv, 'Uredu', {
          duration:3000
      });
    }
    public update(): void {
      this.bandService.updateBand(this.data);
      this.snackBar.open("Uspešno ažuriran bend: " + this.data.naziv, 'Uredu', {
          duration:3000
      });
    }
    public delete(): void {
      this.bandService.deleteBand(this.data.id);
      this.snackBar.open("Uspešno obrisan bend: " + this.data.id, 'Uredu', {
          duration:3000
      });
    }
    public cancel(): void {
      this.dialogRef.close();
      this.snackBar.open('Odustali ste', 'Uredu', {
        duration: 1000
      });


    }
    ngOnInit(): void {
    }


}
  


