import { Injectable } from '@angular/core'
import { Band } from '../models/band.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class BandService {
    private readonly API_URL = 'https://metal-hardkor.herokuapp.com/band/';

    dataChange: BehaviorSubject<Band[]> = new BehaviorSubject<Band[]>( []);

    constructor(private httpClient: HttpClient){

    }
    public getAllBand(): Observable<Band[]>{
        this.httpClient.get<Band[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data)
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });
        return this.dataChange.asObservable();
    }

    public addBand(band: Band): void {
        this.httpClient.post(this.API_URL, band).subscribe();
    }
    public updateBand(band: Band): void {
        this.httpClient.put(this.API_URL + band.id, band).subscribe();
    }

    public deleteBand(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}