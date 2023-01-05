import { Action } from '@ngrx/store';
import { OnBoarding } from './information';

export function addInformationReducer(state: OnBoarding[] = [], action) {
    switch (action.type) {
        case 'Monitor':
            let data = [...state, action.payload];

            if (action.payload.daily !== undefined) {
                let listState = [...state];
                // console.log('>>>Check payload:');
                let dailyAdd = action.payload.daily;
                let dailyState = listState[listState.length - 1];
                let dailyNext = action.payload.daily;

                // console.log('>>>Check dailyAdd:', dailyAdd);
                // console.log('>>>Check dailyState:', dailyState);

                if (dailyState.daily !== undefined) {
                    let check_cust_box = null;
                    let submit_ekyc_box = null;
                    let submit_kyc_status_box = null;
                    let video_statement_box = null;
                    let face_match_box = null;
                    let get_contract_box = null;
                    let sign_contract_box = null;
                    let onboarding_new_customer = null;
                    let pass_onboarding = null;

                    Object.keys(dailyAdd).map(keyName => {
                        if (keyName === 'check_cust_box') {
                            check_cust_box = {
                                total: dailyState.daily.check_cust_box.total + dailyAdd.check_cust_box.total,
                                success:dailyState.daily.check_cust_box.success +dailyAdd.check_cust_box.success,
                                fail: dailyState.daily.check_cust_box.fail + dailyAdd.check_cust_box.fail
                            } 
                        }
                        if (keyName === 'submit_ekyc_box') {
                            submit_ekyc_box = {
                                total: dailyState.daily.submit_ekyc_box.total + dailyAdd.submit_ekyc_box.total,
                                success:dailyState.daily.submit_ekyc_box.success +dailyAdd.submit_ekyc_box.success,
                                fail: dailyState.daily.submit_ekyc_box.fail + dailyAdd.submit_ekyc_box.fail
                            } 
                        }
                        if (keyName === 'submit_kyc_status_box') {
                            submit_kyc_status_box = {
                                total: dailyState.daily.submit_kyc_status_box.total + dailyAdd.submit_kyc_status_box.total,
                                success:dailyState.daily.submit_kyc_status_box.success +dailyAdd.submit_kyc_status_box.success,
                                fail: dailyState.daily.submit_kyc_status_box.fail + dailyAdd.submit_kyc_status_box.fail
                            } 
                        }

                        if (keyName === 'video_statement_box') {
                            video_statement_box = {
                                total: dailyState.daily.video_statement_box.total + dailyAdd.video_statement_box.total,
                                success:dailyState.daily.video_statement_box.success +dailyAdd.video_statement_box.success,
                                fail: dailyState.daily.video_statement_box.fail + dailyAdd.video_statement_box.fail
                            } 
                        }

                        if (keyName === 'face_match_box') {
                            face_match_box = {
                                total: dailyState.daily.face_match_box.total + dailyAdd.face_match_box.total,
                                success:dailyState.daily.face_match_box.success +dailyAdd.face_match_box.success,
                                fail: dailyState.daily.face_match_box.fail + dailyAdd.face_match_box.fail
                            } 
                        }

                        if (keyName === 'get_contract_box') {
                            get_contract_box = {
                                total: dailyState.daily.get_contract_box.total + dailyAdd.get_contract_box.total,
                                success:dailyState.daily.get_contract_box.success +dailyAdd.get_contract_box.success,
                                fail: dailyState.daily.get_contract_box.fail + dailyAdd.get_contract_box.fail
                            } 
                        }

                        if (keyName === 'sign_contract_box') {
                            sign_contract_box = {
                                total: dailyState.daily.sign_contract_box.total + dailyAdd.sign_contract_box.total,
                                success:dailyState.daily.sign_contract_box.success +dailyAdd.sign_contract_box.success,
                                fail: dailyState.daily.sign_contract_box.fail + dailyAdd.sign_contract_box.fail
                            } 
                        }

                        if (keyName === 'onboarding_new_customer') {
                            onboarding_new_customer = dailyState.daily.onboarding_new_customer + dailyAdd.onboarding_new_customer;
                        }

                        if (keyName === 'pass_onboarding') {
                            pass_onboarding = dailyState.daily.pass_onboarding + dailyAdd.pass_onboarding;
                        }
                    })

                    dailyNext = {
                        check_cust_box: check_cust_box,
                        submit_ekyc_box: submit_ekyc_box,
                        submit_kyc_status_box: submit_kyc_status_box,
                        video_statement_box: video_statement_box,
                        face_match_box: face_match_box,
                        get_contract_box: get_contract_box,
                        sign_contract_box: sign_contract_box,
                        onboarding_new_customer: onboarding_new_customer,
                        pass_onboarding: pass_onboarding
                    }

                    // console.log(">>>Check dailyNext:", dailyNext);
                    let dataUpdate = {
                        daily: dailyNext,
                        week: action.payload.week,
                        month: action.payload.month
                    }
                    return [dataUpdate];
                }
            }
            return data;
        default:
            return state;
    }
}