import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core';
import {bounds, latLng, latLngBounds, point, tileLayer, Map} from 'leaflet';
import {filter, map, take, takeWhile, tap} from 'rxjs/operators';
import {merge, of} from 'rxjs';
import {getBoundsOfDistance} from 'geolib';
import {toMarker} from '../../DateServices';

@Component({
    templateUrl: 'openstreetmap.component.html',
    styleUrls: ['openstreetmap.component.css'],
    selector: 'openstreetmap',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OSMComponent implements OnInit {
    
    constructor(private changeDetector: ChangeDetectorRef) {
        this.fitbounds = {padding: point(15, 15)};
        this.bounds = of({latitude: 49.488005, longitude: -117.289857}).pipe(
            map((coord: { latitude: number, longitude: number }) => getBoundsOfDistance(coord, 500)),
            tap(v => console.log(v)),
            map((d: any[]) => d.map(c => [c.latitude, c.longitude])),
            tap(v => console.log(v)),
            map((b: any[]) => latLngBounds(b[0], b[1]))
        );
        this.markers = of([[49.488005, -117.289857]]).pipe(
            map((v: any[]) => v.map(m => toMarker(m[0], m[1], 'Business')))
        );
    }
    
    ready: boolean;
    
    
    markers: any;
    bounds: any;
    center: any;
    
    options: any;
    fitbounds: any;
    
    
    onMapReady(thismap: Map) {
        console.log('onMapReady');
        setTimeout(() => {
            thismap.invalidateSize();
        });
        this.changeDetector.detectChanges();
    }
    
    ngOnInit() {
        
        this.center = of([49.488005, -117.289857]).pipe(
            tap(v => {
                    const ctr = v.length > 0 ? v : [49.488667, -117.289483];
                    // console.log("getDayCenterPoint selector", v, ctr);
                    this.options = {
                        layers: [
                            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                attribution: '&copy; OpenStreetMap contributors'
                            })
                        ],
                        zoom: 7,
                        center: ctr
                    };
                    this.ready = true;
                }
            )
        );
    }
}

/*
<div leaflet style="height: 300px;"
  [leafletOptions]="options"
  [leafletLayers]="layers"
  [leafletLayersControl]="layersControl">
  </div>

 */
