import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { Booking, IPassenger, Istation } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  apiEndPoint: string = '';

  constructor(private http: HttpClient) {
    // this.apiEndPoint = environment.ApiENDPoint;
  }

  getTrainsBetweenStations(serachObj: any): Observable<any> {
    return this.http.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetTrainsBetweenStations' + `?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`)
  }


  createPassenger(obj: IPassenger): Observable<any> {
    return this.http.post('https://freeapi.miniprojectideas.com/api/TrainApp/AddUpdatePassengers', obj)
  }

  login(obj: IPassenger): Observable<any> {
    return this.http.post('https://freeapi.miniprojectideas.com/api/TrainApp/Login', obj)
  }
  bookTrain(obj: Booking): Observable<any> {
    return this.http.post('https://freeapi.miniprojectideas.com/api/TrainApp/BookTrain', obj)
  }

  getAllTrains(): Observable<any> {
    return this.http.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetAllTrains')
  }
  getAllBookings(id: number): Observable<any> {
    return this.http.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetBookingByPassengerId' + '?passengerid=' + id)
  }
}