import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { OnBoarding } from 'src/store/information';
import { RestApiService } from 'src/api/rest-api.service';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
    valueMonitor: any;
    checkCustPhone: any = {
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
    };
    submitEKYC: any = {
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
    };
    checkKYCStatus: any = {
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
    };
    videoStatement:any = {
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
    };
    faceMatch: any = {
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
    };
    signContract: any = {
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
    };
    getContract:any = {
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
    };
    attending: any =  {
        daily: 0,
        week: 0,
        month: 0
    };
    passOnboarding: any =  {
        daily: 0,
        week: 0,
        month: 0
    };

    dataWeek: any;
    dataMonth: any;
    dataDaily: any = {
        "check_cust_box": {"total": 105, "success": 2573, "fail": 29}, 
        "submit_ekyc_box": {"total": 24, "success": 77, "fail": 7}, 
        "submit_kyc_status_box": {"total": 31, "success": 468, "fail": 24}, 
        "video_statement_box": {"total": 0, "success": 17, "fail": 0}, 
        "face_match_box": {"total": 19, "success": 271, "fail": 127}, 
        "get_contract_box": {"total": 18, "success": 151, "fail": 102}, 
        "sign_contract_box": {"total": 11, "success": 44, "fail": 2}, 
        "onboarding_new_customer": 402, 
        "pass_onboarding": 10, 
        "issue_card_func": {"total": 8, "success": 10, "fail": 3}, 
        "create_signature_func": {"total": 1, "success": 2, "fail": 4}, 
        "request_econtract_func": {"total": 0, "success": 0, "fail": 0}, 
        "request_statement_func": {"total": 0, "success": 0, "fail": 0}, 
        "cash_withdrawal_func": {"total": 1, "success": 15, "fail": 5}, 
        "open_td_func": {"total": 0, "success": 2, "fail": 0}, 
        "closure_td_func": {"total": 0, "success": 1, "fail": 0}, 
        "uuid": "2023-01-04-today"
    };

    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>,
        public restApi: RestApiService
    ) {}

    ngOnInit() {
        this.api.SubscribeToNewMessageListener().subscribe({
            next: async (data) => {
                let newData = data.value.data.subscribeToNewMessage;
                let item = JSON.parse(newData.value);
                console.log(item);
            }
        })
    }

    ngAfterViewInit() {
        this.getDataDashboard('2023-01-04-week');  
        this.getDataDashboard('2023-01-04-month');
        // this.getValueMonitor();
        // console.log(this.valueMonitor);
    }

    ngDoCheck() {
        if (this.dataWeek) {
            // console.log(">>> Check data week:", this.dataWeek);
            Object.keys(this.dataWeek).map(keyName => {
                if (keyName === 'check_cust_box') this.checkCustPhone.week = this.dataWeek.check_cust_box;
                if (keyName === 'submit_ekyc_box') this.submitEKYC.week = this.dataWeek.submit_ekyc_box;
                if (keyName === 'submit_kyc_status_box') this.checkKYCStatus.week = this.dataWeek.submit_kyc_status_box;
                if (keyName === 'video_statement_box') this.videoStatement.week = this.dataWeek.video_statement_box;
                if (keyName === 'face_match_box') this.faceMatch.week = this.dataWeek.face_match_box;
                if (keyName === 'get_contract_box') this.getContract.week = this.dataWeek.get_contract_box;
                if (keyName === 'sign_contract_box') this.signContract.week = this.dataWeek.sign_contract_box;
                if (keyName === 'onboarding_new_customer') this.attending.week = this.dataWeek.onboarding_new_customer;
                if (keyName === 'pass_onboarding') this.passOnboarding.week = this.dataWeek.pass_onboarding;
            })
        }
        if (this.dataMonth) {
            // console.log(">>> Check data month:", this.dataMonth);
            Object.keys(this.dataMonth).map(keyName => {
                if (keyName === 'check_cust_box') this.checkCustPhone.month = this.dataMonth.check_cust_box;
                if (keyName === 'submit_ekyc_box') this.submitEKYC.month = this.dataMonth.submit_ekyc_box;
                if (keyName === 'submit_kyc_status_box') this.checkKYCStatus.month = this.dataMonth.submit_kyc_status_box;
                if (keyName === 'video_statement_box') this.videoStatement.month = this.dataMonth.video_statement_box;
                if (keyName === 'face_match_box') this.faceMatch.month = this.dataMonth.face_match_box;
                if (keyName === 'get_contract_box') this.getContract.month = this.dataMonth.get_contract_box;
                if (keyName === 'sign_contract_box') this.signContract.month = this.dataMonth.sign_contract_box;
                if (keyName === 'onboarding_new_customer') this.attending.month = this.dataMonth.onboarding_new_customer;
                if (keyName === 'pass_onboarding') this.passOnboarding.month = this.dataMonth.pass_onboarding;
            })
        }
    }

    async getDataDashboard(timeData) {
        const auth_token = 'dXNlcl9kYXNoYm9hcmRfbG9nX3YyX3VhdDpwYXNzd29yZF90dWFuYW5oX3Rlc3Rpbmc=';
        let body = {
            "uuid": timeData
        }

        await this.restApi.getDataOnboarding(auth_token, body).subscribe(res => {
            if (timeData.split('-').slice(-1)[0] === 'week') {
                res['data'].map(item => {
                    if (item._id === timeData) {
                        this.dataWeek = item._source;
                    }
                })
            }
            if (timeData.split('-').slice(-1)[0] === 'month') {
                res['data'].map(item => {
                    if (item._id === timeData) {
                        this.dataMonth = item._source;
                    }
                })
            }
            if (this.dataWeek && this.dataMonth) {
                this.disPatchMonitor(this.dataDaily, this.dataWeek, this.dataMonth);
            }
        })
    }

    disPatchMonitor(dataDaily, dataWeek, dataMonth) {
        this.store.dispatch({
            type: 'Monitor',
            payload: <OnBoarding>{
                daily: dataDaily,
                week: dataWeek,
                month: dataMonth
            }
        });
    }

    getValueMonitor() {
        this.store.select(state => state.informationdata).subscribe(
            getdata => this.valueMonitor = getdata
        );
    }
}
