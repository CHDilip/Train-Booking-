import { Component, OnInit } from '@angular/core';
import { Istation } from 'src/app/models/station';
import { StationsService } from 'src/app/services/stations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any
  stationList: Istation[] = [];
  travelObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: ''
  }

  constructor(private stationsarv: StationsService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadStation('')
  }

  loadStation(data: any) {
    this.stationsarv.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }

  onSearch() {
    this.router.navigate(['/search', this.travelObj.fromStationId, this.travelObj.toStationId, this.travelObj.dateOfTravel])
  }
}
