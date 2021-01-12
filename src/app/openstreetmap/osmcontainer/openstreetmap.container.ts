import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  templateUrl: "openstreetmap.container.html",
  styleUrls: ["openstreetmap.container.css"],
  selector: "osm-container",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OSMContainer {
  day$: Observable<number>;
  
  constructor() {
    
    //   this.day$ = this.store.select(selectedDay).pipe(
    //     tap(v => {
    //       if (v === 0) {
    //         this.router.navigate(['.', getDayMillisecond(Date.now())], {relativeTo: this.route})
    //       }
    //     }),
    //     filter(v => v > 0)
    //     );
    //   this.store.dispatch(new GetLocationList([]));
    //   this.store.dispatch(new GetLocationDayList(+Date.now()))
    // }
    //
    // upload() {
    //   console.log("osmupload button");
    //
    //   this.router.navigate(["./upload"], {relativeTo: this.route});
    //
    // }
  }
}
