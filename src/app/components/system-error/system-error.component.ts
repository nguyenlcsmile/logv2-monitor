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

    nameSystemErrors: any = [
        'systemBackBase', 'systemPega', 'systemCleverTab', 'systemESB',
        'systemFPT_EContract', 'systemFinacle', 'systemHyperVerge',
        'systemPegaCrm', 'systemPegaLos', 'systemRobo', 'systemSmsGateWay',
        'systemTaseco', 'systemTutuka', 'systemUbit', 'systemVietQR', 'systemVymo'
    ];

    arrSystemErrorsDaily: any = [
        {
            name: 'BackBase',
            value: 0
        },
        {
            name: 'Pega',
            value: 0
        },
        {
            name: 'CleverTab',
            value: 0
        },
        {
            name: 'ESB',
            value: 0
        },
        {
            name: 'FPT_EContract',
            value: 0
        },
        {
            name: 'Finacle',
            value: 0
        },
        {
            name: 'HyperVerge',
            value: 0
        },
        {
            name: 'PegaCrm',
            value: 0
        },
        {
            name: 'PegaLos',
            value: 0
        },
        {
            name: 'Robo',
            value: 0
        },
        {
            name: 'SmsGateWay',
            value: 0
        },
        {
            name: 'Taseco',
            value: 0
        },
        {
            name: 'Tutuka',
            value: 0
        },
        {
            name: 'Ubit',
            value: 0
        },
        {
            name: 'VietQR',
            value: 0
        },
        {
            name: 'Vymo',
            value: 0
        }
    ];
    arrSystemErrorsDailyCopy: any = [];

    arrSystemErrorsWeek: any = [
        {
            name: 'BackBase',
            value: 0
        },
        {
            name: 'Pega',
            value: 0
        },
        {
            name: 'CleverTab',
            value: 0
        },
        {
            name: 'ESB',
            value: 0
        },
        {
            name: 'FPT_EContract',
            value: 0
        },
        {
            name: 'Finacle',
            value: 0
        },
        {
            name: 'HyperVerge',
            value: 0
        },
        {
            name: 'PegaCrm',
            value: 0
        },
        {
            name: 'PegaLos',
            value: 0
        },
        {
            name: 'Robo',
            value: 0
        },
        {
            name: 'SmsGateWay',
            value: 0
        },
        {
            name: 'Taseco',
            value: 0
        },
        {
            name: 'Tutuka',
            value: 0
        },
        {
            name: 'Ubit',
            value: 0
        },
        {
            name: 'VietQR',
            value: 0
        },
        {
            name: 'Vymo',
            value: 0
        }
    ];
    arrSystemErrorsWeekCopy: any = [];

    arrSystemErrorsMonth: any = [
        {
            name: 'BackBase',
            value: 0
        },
        {
            name: 'Pega',
            value: 0
        },
        {
            name: 'CleverTab',
            value: 0
        },
        {
            name: 'ESB',
            value: 0
        },
        {
            name: 'FPT_EContract',
            value: 0
        },
        {
            name: 'Finacle',
            value: 0
        },
        {
            name: 'HyperVerge',
            value: 0
        },
        {
            name: 'PegaCrm',
            value: 0
        },
        {
            name: 'PegaLos',
            value: 0
        },
        {
            name: 'Robo',
            value: 0
        },
        {
            name: 'SmsGateWay',
            value: 0
        },
        {
            name: 'Taseco',
            value: 0
        },
        {
            name: 'Tutuka',
            value: 0
        },
        {
            name: 'Ubit',
            value: 0
        },
        {
            name: 'VietQR',
            value: 0
        },
        {
            name: 'Vymo',
            value: 0
        }
    ];
    arrSystemErrorsMonthCopy: any = [];

    arrCriticalErrors: any = ['EnvenCode1'];

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


        if (this.arrSystemErrorsDaily.length >= 2) {
            this.arrSystemErrorsDailyCopy = [...this.arrSystemErrorsDaily].sort((a, b) => b.value - a.value);
        }
        if (this.arrSystemErrorsWeek.length >= 2) {
            this.arrSystemErrorsWeekCopy = [...this.arrSystemErrorsWeek].sort((a, b) => b.value - a.value);
        }
        if (this.arrSystemErrorsMonth.length >= 2) {
            this.arrSystemErrorsMonthCopy = [...this.arrSystemErrorsMonth].sort((a, b) => b.value - a.value);
        }

    }


    filterSystemErrorDaily(name) {
        if (this.dataDaily[`${name}`].total_400 !== 0 && this.nameSystemErrors.includes(name)) {
            let index = this.nameSystemErrors.indexOf(name);
            this.arrSystemErrorsDaily[index] = {
                name: name.substring(6),
                value: this.dataDaily[`${name}`].total_400
            };
        }
    }

    filterSystemErrorWeek(name) {
        if (this.dataWeek[`${name}`].total_400 !== 0 && this.nameSystemErrors.includes(name)) {
            let index = this.nameSystemErrors.indexOf(name);
            this.arrSystemErrorsWeek[index] = {
                name: name.substring(6),
                value: this.dataWeek[`${name}`].total_400
            };
        }
        // console.log(">>>Check Week:", this.arrSystemErrorsWeek);
    }

    filterSystemErrorMonth(name) {
        if (this.dataMonth[`${name}`].total_400 !== 0) {
            let index = this.nameSystemErrors.indexOf(name);
            this.arrSystemErrorsMonth[index] = {
                name: name.substring(6),
                value: this.dataMonth[`${name}`].total_400
            };
        }
        // if (this.arrSystemErrorsMonth.length >= 2) this.arrSystemErrorsMonth.sort((a, b) => b.value - a.value);
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
