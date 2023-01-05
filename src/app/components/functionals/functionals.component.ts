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
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    }
    createSignatureFunc: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    }
    requestContract: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    }
    requestStatement: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    }
    cashWithdrawal: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    }
    openTd: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    }
    closureTd: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
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
                if (keyName === 'issue_card_func') this.issueCardFunc.week = this.dataWeek.issue_card_func;
                if (keyName === 'create_signature_func') this.createSignatureFunc.week = this.dataWeek.create_signature_func;
                if (keyName === 'request_econtract_func') this.requestContract.week = this.dataWeek.request_econtract_func;
                if (keyName === 'request_statement_func') this.requestStatement.week = this.dataWeek.request_statement_func;
                if (keyName === 'cash_withdrawal_func') this.cashWithdrawal.week = this.dataWeek.cash_withdrawal_func;
                if (keyName === 'open_td_func') this.openTd.week = this.dataWeek.open_td_func;
                if (keyName === 'closure_td_func') this.closureTd.week = this.dataWeek.closure_td_func;
            })
        }
        if (this.dataMonth) {
            Object.keys(this.dataMonth).map(keyName => {
                if (keyName === 'issue_card_func') this.issueCardFunc.month = this.dataMonth.issue_card_func;
                if (keyName === 'create_signature_func') this.createSignatureFunc.month = this.dataMonth.create_signature_func;
                if (keyName === 'request_econtract_func') this.requestContract.month = this.dataMonth.request_econtract_func;
                if (keyName === 'request_statement_func') this.requestStatement.month = this.dataMonth.request_statement_func;
                if (keyName === 'cash_withdrawal_func') this.cashWithdrawal.month = this.dataMonth.cash_withdrawal_func;
                if (keyName === 'open_td_func') this.openTd.month = this.dataMonth.open_td_func;
                if (keyName === 'closure_td_func') this.closureTd.month = this.dataMonth.closure_td_func;
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
