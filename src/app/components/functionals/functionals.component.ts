import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';

@Component({
    selector: 'app-functionals',
    templateUrl: './functionals.component.html',
    styleUrls: ['./functionals.component.scss']
})
export class FunctionalsComponent implements OnInit {
    valueMonitor: any;
    dataWeek: any;
    dataMonth: any;

    issueCardFunc: any = {
        total: 0,
        success: 0,
        fail: 0
    }

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit() {}
    
    ngDoCheck() {
        this.getValueMonitor();
        this.getValueFunctionals(this.valueMonitor);

        if (this.dataWeek) {
            Object.keys(this.dataWeek).map(keyName => {
                if (keyName === 'issue_card_func') this.issueCardFunc = this.dataWeek.issue_card_func;
            })
        }
    }

    getValueFunctionals(data) {
        if (data[0]) {
            this.dataWeek = data[0].week;
            this.dataMonth = data[0].month;
        }
    }

    getValueMonitor() {
        this.store.select(state => state.informationdata).subscribe(
            getdata => this.valueMonitor = getdata
        );
    }
}
