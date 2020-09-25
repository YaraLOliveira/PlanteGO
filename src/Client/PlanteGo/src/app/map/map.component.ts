import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map;

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap () {
    const estadoGoias = {
      lat: -16.6799,
      lng: -49.255
    }
    const zoomLevel = 12;
    
    this.map = L.map('map',{
      center: [estadoGoias.lat, estadoGoias.lng],
      zoom: zoomLevel,
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      minZoom: 12,
      maxZoom: 28,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    mainLayer.addTo(this.map)

  }

}
