import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';

@Component({
    selector: 'app-system-error',
    templateUrl: './system-error.component.html',
    styleUrls: ['./system-error.component.scss']
})
export class SystemErrorComponent implements OnInit {
    valueMonitor: any;
    updateMonitor: any;
    dataWeek: any;
    dataMonth: any;
    dataDaily: any;
    
    arrSystemErrors: any = [];
    nameSystemErrors: any = [];

    constructor(private store: Store<AppState>) { }

    ngOnInit() {}

    ngDoCheck() {
        this.getValueMonitor();
        this.getValueFunctionals(this.valueMonitor);

        if (this.dataDaily) {
            Object.keys(this.dataDaily).map(keyName => {
                if (keyName.substring(0, 6) === 'system') this.filterSystemError(keyName);
            })
        }
    }

    filterSystemError(name) {
        if (!this.nameSystemErrors.includes(name) && this.dataDaily[`${name}`].total_400 !== 0) {
            this.nameSystemErrors.push(name);
            this.arrSystemErrors.push([name.substring(6), this.dataDaily[`${name}`].total_400]);
        } else if (this.dataDaily[`${name}`].total_400 !== 0) {
            let index = this.nameSystemErrors.indexOf(name);
            this.arrSystemErrors[index] = [name.substring(6), this.dataDaily[`${name}`].total_400];
        }
    }

    getValueFunctionals(data) {
        if (data[0]) {
            this.dataWeek = data[0].week;
            this.dataMonth = data[0].month;
            this.dataDaily = data[0].daily;
        }
    }

    getValueMonitor() {
        this.store.select(state => state.informationdata).subscribe(
            getdata => this.valueMonitor = getdata
        );
    }
}
