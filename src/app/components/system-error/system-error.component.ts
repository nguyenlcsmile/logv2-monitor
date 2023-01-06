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
    
    systemBackBase: any = 0;
    systemCleverTab: any = 0;
    systemESB: any = 0;
    systemFPT_EContract: any = 0;
    systemFinacle: any = 0;
    systemHyperVerge: any = 0;
    systemPega: any = 0;
    systemPegaCrm: any = 0;
    systemPegaLos: any = 0;
    systemRobo: any = 0;
    systemSmsGateWay: any = 0;
    systemTaseco: any = 0;
    systemTutuka: any = 0;
    systemUbit: any = 0;
    systemVietQR: any = 0;
    systemVymo: any = 0;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {}

    ngDoCheck() {
        this.getValueMonitor();
        this.getValueFunctionals(this.valueMonitor);

        if (this.dataDaily) {
            Object.keys(this.dataDaily).map(keyName => {
                if (keyName === 'systemBackBase') 
                    this.systemBackBase = this.dataDaily.systemBackBase.total_400 + this.dataDaily.systemBackBase.total_500;
                if (keyName === 'systemCleverTab') 
                    this.systemCleverTab = this.dataDaily.systemCleverTab.total_400 + this.dataDaily.systemCleverTab.total_500;
                if (keyName === 'systemESB') 
                    this.systemESB = this.dataDaily.systemESB.total_400 + this.dataDaily.systemESB.total_500;
                if (keyName === 'systemFPT_EContract') 
                    this.systemFPT_EContract = this.dataDaily.systemFPT_EContract.total_400 + this.dataDaily.systemFPT_EContract.total_500;
                if (keyName === 'systemFinacle') 
                    this.systemFinacle = this.dataDaily.systemFinacle.total_400 + this.dataDaily.systemFinacle.total_500;
                if (keyName === 'systemHyperVerge') 
                    this.systemHyperVerge = this.dataDaily.systemHyperVerge.total_400 + this.dataDaily.systemHyperVerge.total_500;
                if (keyName === 'systemPega') 
                    this.systemPega = this.dataDaily.systemPega.total_400 + this.dataDaily.systemPega.total_500;
                if (keyName === 'systemPegaCrm') 
                    this.systemPegaCrm = this.dataDaily.systemPegaCrm.total_400 + this.dataDaily.systemPegaCrm.total_500;
                if (keyName === 'systemPegaLos') 
                    this.systemPegaLos = this.dataDaily.systemPegaLos.total_400 + this.dataDaily.systemPegaLos.total_500;
                if (keyName === 'systemRobo') 
                    this.systemRobo = this.dataDaily.systemRobo.total_400 + this.dataDaily.systemRobo.total_500;
                if (keyName === 'systemSmsGateWay') 
                    this.systemSmsGateWay = this.dataDaily.systemSmsGateWay.total_400 + this.dataDaily.systemSmsGateWay.total_500;
                if (keyName === 'systemTaseco') 
                    this.systemTaseco = this.dataDaily.systemTaseco.total_400 + this.dataDaily.systemTaseco.total_500;
                if (keyName === 'systemTutuka') 
                    this.systemTutuka = this.dataDaily.systemTutuka.total_400 + this.dataDaily.systemTutuka.total_500;
                if (keyName === 'systemUbit') 
                    this.systemUbit = this.dataDaily.systemUbit.total_400 + this.dataDaily.systemUbit.total_500;
                if (keyName === 'systemVietQR') 
                    this.systemVietQR = this.dataDaily.systemVietQR.total_400 + this.dataDaily.systemVietQR.total_500;
                if (keyName === 'systemVymo') 
                    this.systemVymo = this.dataDaily.systemVymo.total_400 + this.dataDaily.systemVymo.total_500;
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
