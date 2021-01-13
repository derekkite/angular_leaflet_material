import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';

import { animate, state, style, transition, trigger } from '@angular/animations';
import {CollectionId} from '../../documentid';
import {LocationTable} from '../../location.model';
import {daylocationdata} from "./daylocationdata";



@Component({
  selector: 'daylocation-component',
  templateUrl: './daylocation.table.component.html',
  styleUrls: ['./daylocation.table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DayLocationTableComponent implements OnInit {


  displayedColumns = ['type', 'timestart', 'timeend', 'duration'];
   dataSource: LocationTableDataSource;
  _expandedRow: LocationTable | null;
  set expandedRow(row: LocationTable | null) {
    this._expandedRow = row;
    console.log('new row', row);
  }
  get expandedRow() {
    return this._expandedRow;
  }


  constructor() {
    this.dataSource = new LocationTableDataSource();
  }





  setExpandedRow(location: LocationTable) {
    if (location.center) {
      this._expandedRow = location;
    } else {
      if (this._expandedRow) {
        this._expandedRow = null;
      }
    }
  }







  clickUploadAll(process: string = '') {

  }

  clickUploadRow(name: string, process: string = '') {

  }




  onClick(event: any) {
    console.log('onClick', event);
  }

  ngOnInit() {

  }



}

export class LocationTableDataSource extends DataSource<LocationTable> {

  renderedData: LocationTable[] = [];

  constructor() {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<LocationTable[]> {
    return of(daylocationdata);
  }

  disconnect() {
  }

}

