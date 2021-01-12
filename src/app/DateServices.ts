import {icon, marker, polyline} from 'leaflet';

export function getDayMillisecond(date: number) {
  let d = date ? new Date(date) : new Date(Date.now());
  d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return +d;
}

export function dateDiff(date1: Date, date2: Date) {

  const ms = +date2 - +date1;
  let d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;

  return `H: ${h}, M: ${m} S: ${s}`;
}

export function toMarker(lat: number, lng: number, title: string) {
  return marker(
      [lat, lng],
      {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: "assets/marker-icon.png",
          shadowUrl: "assets/marker-shadow.png"
        }),
        title: title
      }
  );
}

export function toPath(latlngs: [number, number][], color: string = "red", weight: number = 3) {
  // console.log('toPath', latlngs);
  return polyline(latlngs, { color: color, weight: weight });
}
