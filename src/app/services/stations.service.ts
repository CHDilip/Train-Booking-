import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { CONSTANT } from '../constant/constant';
// import { Istation } from '../models/station';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  apiEndPoint: string = '';


  constructor(private http: HttpClient) {
    // this.apiEndPoint = environment.ApiENDPoint;
  }

  getAllStations() {
    return this.http.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetAllStations')
  }


}
