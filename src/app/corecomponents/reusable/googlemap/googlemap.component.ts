import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { GeocoderResponse } from 'src/app/models/googlemaps/geocoder-response.model';
import { EnteredPostalCodeService } from 'src/app/services/googlemaps/enteredpostalcode.service';
import { GeocodingService } from 'src/app/services/googlemaps/geocoding.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent {
  postalCodeForm: any;
  submitted= false;

  constructor(
    private geocodingService: GeocodingService, private route: Router, private formBuilder: FormBuilder, private postalCodeService:EnteredPostalCodeService
  ) { 
    this.findAddress()
  }
  ngOnInit(): void {

  }
  display : any;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  @ViewChild(GoogleMap, { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  infoWindow!: MapInfoWindow;

  mapZoom = 20;
  mapCenter!: google.maps.LatLng;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 12,
    disableDefaultUI: true,
  };
  lat: any;
  lng: any;


  markerInfoContent = '';
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.DROP,
  };

  geocoderWorking = false;
  geolocationWorking = false;

  address!: string;
  formattedAddress?: string | null = null;
  locationCoords?: google.maps.LatLng | null = null;

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }
  onMapDragEnd(event: any) {
    this.lat = event.latLng?.lat();
    this.lng = event.latLng?.lng()

    const point: google.maps.LatLngLiteral = {
      lat: this.lat,
      lng: this.lng,
    };

    this.geocoderWorking = true;
    this.geocodingService
      .geocodeLatLng(point)
      .then((response: GeocoderResponse) => {
        if (response.status === 'OK') {
          if (response.results.length) {
            const value = response.results[0];

            this.locationCoords = new google.maps.LatLng(point);

            this.mapCenter = new google.maps.LatLng(point);
            this.map.panTo(point);

            this.address = value.formatted_address;
            this.formattedAddress = value.formatted_address;

            this.markerOptions = {
              draggable: true,
              animation: google.maps.Animation.DROP,
            };

            this.markerInfoContent = value.formatted_address;
          }
        }
      })
      .finally(() => {
        this.geocoderWorking = false;
      });
  }
  getCurrentLocation() {
    this.geolocationWorking = true;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.geolocationWorking = false;

        const point: google.maps.LatLngLiteral = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.geocoderWorking = true;
        this.geocodingService
          .geocodeLatLng(point)
          .then((response: GeocoderResponse) => {
            if (response.status === 'OK' && response.results?.length) {
              const value = response.results[0];

              this.locationCoords = new google.maps.LatLng(point);

              this.mapCenter = new google.maps.LatLng(point);
              this.map.panTo(point);

              this.address = value.formatted_address;
              this.formattedAddress = value.formatted_address;
              this.markerInfoContent = value.formatted_address;

              this.markerOptions = {
                draggable: true,
                animation: google.maps.Animation.DROP,
              };
            } else {
              alert("err msg")
              // this.toastr.error(response.error_message, response.status);
            }
          })
          .finally(() => {
            this.geocoderWorking = false;
          });
      },
      (error) => {
        this.geolocationWorking = false;

        if (error.PERMISSION_DENIED) {
          alert("Couldn't get your location")
          // this.toastr.error("Couldn't get your location", 'Permission denied');
        } else if (error.POSITION_UNAVAILABLE) {
          // this.toastr.error(
          //   "Couldn't get your location",
          //   'Position unavailable'
          // );
          alert("Couldn't get your location Position unavailable")
        } else if (error.TIMEOUT) {
          alert("'Timed out")
          // this.toastr.error("Couldn't get your location", 'Timed out');
        } else {
          alert(error.message)
          // this.toastr.error(error.message, `Error: ${error.code}`);
        }
      },
      { enableHighAccuracy: true }
    );
  }

  findAddress() {

    this.submitted = true;

    // if (this.postalCodeForm.invalid) {
    //   return;
    // }
    let postalCode:any = localStorage.getItem("postalcode");
    postalCode = JSON.parse(postalCode);
    postalCode = postalCode.postalCode
    // console.log(JSON.stringify(this.postalCodeForm.value, null, 2));
    // if (!this.address || this.address.length === 0) {
    //   return;
    // }

    this.geocoderWorking = true;
    this.geocodingService
      .getLocation(postalCode)
      .subscribe(
        (response: GeocoderResponse) => {
          if (response.status === 'OK' && response.results?.length) {
            const location = response.results[0];
            const loc: any = location.geometry.location;

            this.locationCoords = new google.maps.LatLng(loc.lat, loc.lng);

            this.mapCenter = location.geometry.location;

            setTimeout(() => {
              if (this.map !== undefined) {
                this.map.panTo(location.geometry.location);
              }
            }, 500);

            this.address = location.formatted_address;
            this.formattedAddress = location.formatted_address;
            this.markerInfoContent = location.formatted_address;

            this.markerOptions = {
              draggable: true,
              animation: google.maps.Animation.DROP,
            };
            // this.postalCodeService.storePostalCode(this.postalCodeForm.value);
            // this.route.navigate(['/home/dashboard']);
          } else {
            alert(response)
            // this.toastr.error(response.error_message, response.status);
          }
        },
        (err: HttpErrorResponse) => {
          console.error('geocoder error', err);
        }
      )
      .add(() => {
        this.geocoderWorking = false;
      });
  }
}