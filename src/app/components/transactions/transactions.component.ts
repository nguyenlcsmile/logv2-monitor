import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  valueMonitor: any;
  updateMonitor: any;
  dataWeek: any;
  dataMonth: any;
  dataDaily: any;

  transactionNapas: any = {
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

  ngOnInit() {
  }

  ngDoCheck() {
    this.getValueMonitor();
    this.getValueFunctionals(this.valueMonitor);

    if (this.dataWeek) {
      Object.keys(this.dataWeek).map(keyName => {
        if (keyName === 'transaction_napas') this.transactionNapas.week = this.dataWeek.transaction_napas;
      })
    }
    if (this.dataMonth) {
      Object.keys(this.dataMonth).map(keyName => {
        if (keyName === 'transaction_napas') this.transactionNapas.month = this.dataMonth.transaction_napas;
      })
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
