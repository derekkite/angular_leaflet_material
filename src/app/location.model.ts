
import {Point} from "geojson";

export interface GeoBounds {
  minLat: number,
  maxLat: number,
  minLng: number,
  maxLng: number,
}


export interface Locations {
  tid: string;
  day: Date;
  state: number;  // 1 route, -1 stop point
  stoppoint: TimeLocation;
  routepoints: TimeLocation[];
  coords: number[];
  source?: string;
  center?: Point;
  bounds?: GeoBounds;
  startTime?: Date;
  endTime?: Date;
}

export interface TimeLocation {
  timeStart: Date;
  timeEnd?: Date;
  location?: Point;
  timelocations?: TimeLocation[];
}

export interface DayLocations {
  [day: number]: TimeLocation[]
}


// get time, duration, type of point, business location, center point and bounds
export interface LocationTable {
  daytid: string;
  timestart: string;
  timeend: string;
  duration: string;
  type: string;
  business?: string;
  center: Point;
  bounds: GeoBounds;
}
