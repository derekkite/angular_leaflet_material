import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {addDays, subDays} from 'date-fns';

@Component({
    templateUrl: 'dayselect.component.html',
    styleUrls: ['dayselect.component.css'],
    selector: 'day-select',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaySelectComponent {
    _day: number;
    @Input() set day(d: number) {
        this._day = d;
        this.fc.setValue(new Date(d));
    };
    
    get day() {
        return this._day;
    }
    
    fc: FormControl;
    
    constructor() {
        this.fc = new FormControl('');
    }
    
    dayMinus() {
        // console.log('dayMinus')
        const newday = subDays(new Date(this.day), 1);
        // console.log(newday)
        
        // this.store.dispatch(setSelectedDay({day: +newday}))
    }
    
    dayPlus() {
        // console.log('dayPlus')
        const newday = addDays(new Date(this.day), 1);
        // console.log(newday)
        
        // this.store.dispatch(setSelectedDay({day: +newday}))
    }
    
    selectDay(day: Date) {
        // console.log('selectday', day.toDateString());
        
        
        // this.store.dispatch(setSelectedDay({day: +day}))
    }
}
