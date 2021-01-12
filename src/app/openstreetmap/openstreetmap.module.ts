import {NgModule} from "@angular/core";
import {OSMComponent} from "./osmcomponent/openstreetmap.component";
import {OSMContainer} from "./osmcontainer/openstreetmap.container";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {DaySelectComponent} from "./dayselect/dayselect.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material/core";
import {DateFnsDateAdapter, MAT_DATE_FNS_DATE_FORMATS} from "../datefnsadapter/datefnsadapter";
import {MAT_DATE_FNS_DATE_FULL_FORMAT} from "./dayselect/date-display";
import {ReactiveFormsModule} from "@angular/forms";
import { DayLocationTableComponent } from "./daylocationtable/daylocation.table.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    OSMComponent,
    OSMContainer,
    DaySelectComponent,
    DayLocationTableComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CommonModule,
    LeafletModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: DateFnsDateAdapter},
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_DATE_FNS_DATE_FULL_FORMAT
    },
  ],
  exports: [
    OSMContainer,
    OSMComponent,

  ]
})
export class OpenstreetmapModule {}
