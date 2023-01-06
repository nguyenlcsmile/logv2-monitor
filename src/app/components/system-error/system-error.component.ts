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

    arrSystemErrorsDaily: any = [];
    nameSystemErrorsDaily: any = [];
    arrSystemErrorsWeek: any = [];
    nameSystemErrorsWeek: any = [];
    arrSystemErrorsMonth: any = [];
    nameSystemErrorsMonth: any = [];

    constructor(private store: Store<AppState>) { }

    ngOnInit() { }

    ngDoCheck() {
        this.getValueMonitor();
        this.getValueFunctionals(this.valueMonitor);

        if (this.dataDaily) {
            Object.keys(this.dataDaily).map(keyName => {
                if (keyName.substring(0, 6) === 'system') this.filterSystemErrorDaily(keyName);
            })
        }
        // console.log(this.arrSystemErrorsDaily);
        if (this.dataWeek) {
            Object.keys(this.dataWeek).map(keyName => {
                if (keyName.substring(0, 6) === 'system') this.filterSystemErrorWeek(keyName);
            })
        }
        // console.log(this.arrSystemErrorsWeek);
        if (this.dataMonth) {
            Object.keys(this.dataMonth).map(keyName => {
                if (keyName.substring(0, 6) === 'system') this.filterSystemErrorMonth(keyName);
            })
        }
    }


    filterSystemErrorDaily(name) {
        if (!this.nameSystemErrorsDaily.includes(name) && this.dataDaily[`${name}`].total_400 !== 0) {
            this.nameSystemErrorsDaily.push(name);
            this.arrSystemErrorsDaily.push({
                name: name.substring(6),
                value: this.dataDaily[`${name}`].total_400
            });
        } else if (this.dataDaily[`${name}`].total_400 !== 0) {
            let index = this.nameSystemErrorsDaily.indexOf(name);
            this.arrSystemErrorsDaily[index] = {
                name: name.substring(6),
                value: this.dataDaily[`${name}`].total_400
            };
        }
        this.arrSystemErrorsDaily.sort((a, b) => b.value - a.value);
    }

    filterSystemErrorWeek(name) {
        if (!this.nameSystemErrorsWeek.includes(name) && this.dataWeek[`${name}`].total_400 !== 0) {
            this.nameSystemErrorsWeek.push(name);
            this.arrSystemErrorsWeek.push({
                name: name.substring(6),
                value: this.dataWeek[`${name}`].total_400
            });
        } else if (this.dataWeek[`${name}`].total_400 !== 0) {
            let index = this.nameSystemErrorsWeek.indexOf(name);
            this.arrSystemErrorsWeek[index] = {
                name: name.substring(6),
                value: this.dataWeek[`${name}`].total_400
            };
        }
        this.arrSystemErrorsWeek.sort((a, b) => b.value - a.value);
        // console.log(">>>Check Week:", this.arrSystemErrorsWeek);
    }

    filterSystemErrorMonth(name) {
        if (!this.nameSystemErrorsMonth.includes(name) && this.dataMonth[`${name}`].total_400 !== 0) {
            this.nameSystemErrorsMonth.push(name);
            this.arrSystemErrorsMonth.push({
                name: name.substring(6),
                value: this.dataMonth[`${name}`].total_400
            });
        } else if (this.dataMonth[`${name}`].total_400 !== 0) {
            let index = this.nameSystemErrorsMonth.indexOf(name);
            this.arrSystemErrorsMonth[index] = {
                name: name.substring(6),
                value: this.dataMonth[`${name}`].total_400
            };
        }
        this.arrSystemErrorsMonth.sort((a, b) => b.value - a.value);
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
