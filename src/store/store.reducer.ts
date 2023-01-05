import { Action } from '@ngrx/store';
import { OnBoarding } from './information';

export function addInformationReducer(state: OnBoarding[] = [], action) {
    switch (action.type) {
        case 'Monitor':
            let data = [...state, action.payload];

            if (action.payload.daily !== undefined) {
                // console.log('>>>Check payload:');
                // console.log(data.length);
                if (data.length === 1) {
                    // console.log(action.payload);
                    return [action.payload];
                }
                let listState = [...state];
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
                    let issue_card_func = null;
                    let create_signature_func = null;
                    let request_econtract_func = null;
                    let request_statement_func = null;
                    let cash_withdrawal_func = null;
                    let open_td_func = null;
                    let closure_td_func = null;
                    let transaction_napas = null;

                    Object.keys(dailyAdd).map(keyName => {
                        if (keyName === 'check_cust_box') {
                            check_cust_box = {
                                total: dailyState.daily.check_cust_box.total + dailyAdd.check_cust_box.total,
                                success: dailyState.daily.check_cust_box.success + dailyAdd.check_cust_box.success,
                                fail: dailyState.daily.check_cust_box.fail + dailyAdd.check_cust_box.fail
                            }
                        }

                        if (keyName === 'submit_ekyc_box') {
                            submit_ekyc_box = {
                                total: dailyState.daily.submit_ekyc_box.total + dailyAdd.submit_ekyc_box.total,
                                success: dailyState.daily.submit_ekyc_box.success + dailyAdd.submit_ekyc_box.success,
                                fail: dailyState.daily.submit_ekyc_box.fail + dailyAdd.submit_ekyc_box.fail
                            }
                        }

                        if (keyName === 'submit_kyc_status_box') {
                            submit_kyc_status_box = {
                                total: dailyState.daily.submit_kyc_status_box.total + dailyAdd.submit_kyc_status_box.total,
                                success: dailyState.daily.submit_kyc_status_box.success + dailyAdd.submit_kyc_status_box.success,
                                fail: dailyState.daily.submit_kyc_status_box.fail + dailyAdd.submit_kyc_status_box.fail
                            }
                        }

                        if (keyName === 'video_statement_box') {
                            video_statement_box = {
                                total: dailyState.daily.video_statement_box.total + dailyAdd.video_statement_box.total,
                                success: dailyState.daily.video_statement_box.success + dailyAdd.video_statement_box.success,
                                fail: dailyState.daily.video_statement_box.fail + dailyAdd.video_statement_box.fail
                            }
                        }

                        if (keyName === 'face_match_box') {
                            face_match_box = {
                                total: dailyState.daily.face_match_box.total + dailyAdd.face_match_box.total,
                                success: dailyState.daily.face_match_box.success + dailyAdd.face_match_box.success,
                                fail: dailyState.daily.face_match_box.fail + dailyAdd.face_match_box.fail
                            }
                        }

                        if (keyName === 'get_contract_box') {
                            get_contract_box = {
                                total: dailyState.daily.get_contract_box.total + dailyAdd.get_contract_box.total,
                                success: dailyState.daily.get_contract_box.success + dailyAdd.get_contract_box.success,
                                fail: dailyState.daily.get_contract_box.fail + dailyAdd.get_contract_box.fail
                            }
                        }

                        if (keyName === 'sign_contract_box') {
                            sign_contract_box = {
                                total: dailyState.daily.sign_contract_box.total + dailyAdd.sign_contract_box.total,
                                success: dailyState.daily.sign_contract_box.success + dailyAdd.sign_contract_box.success,
                                fail: dailyState.daily.sign_contract_box.fail + dailyAdd.sign_contract_box.fail
                            }
                        }

                        if (keyName === 'onboarding_new_customer') {
                            onboarding_new_customer = dailyState.daily.onboarding_new_customer + dailyAdd.onboarding_new_customer;
                        }

                        if (keyName === 'pass_onboarding') {
                            pass_onboarding = dailyState.daily.pass_onboarding + dailyAdd.pass_onboarding;
                        }

                        if (keyName === 'issue_card_func') {
                            issue_card_func = {
                                total: dailyState.daily.issue_card_func.total + dailyAdd.issue_card_func.total,
                                success: dailyState.daily.issue_card_func.success + dailyAdd.issue_card_func.success,
                                fail: dailyState.daily.issue_card_func.fail + dailyAdd.issue_card_func.fail
                            }
                        }

                        if (keyName === 'create_signature_func') {
                            create_signature_func = {
                                total: dailyState.daily.create_signature_func.total + dailyAdd.create_signature_func.total,
                                success: dailyState.daily.create_signature_func.success + dailyAdd.create_signature_func.success,
                                fail: dailyState.daily.create_signature_func.fail + dailyAdd.create_signature_func.fail
                            }
                        }

                        if (keyName === 'request_econtract_func') {
                            request_econtract_func = {
                                total: dailyState.daily.request_econtract_func.total + dailyAdd.request_econtract_func.total,
                                success: dailyState.daily.request_econtract_func.success + dailyAdd.request_econtract_func.success,
                                fail: dailyState.daily.request_econtract_func.fail + dailyAdd.request_econtract_func.fail
                            }
                        }

                        if (keyName === 'request_statement_func') {
                            request_statement_func = {
                                total: dailyState.daily.request_statement_func.total + dailyAdd.request_statement_func.total,
                                success: dailyState.daily.request_statement_func.success + dailyAdd.request_statement_func.success,
                                fail: dailyState.daily.request_statement_func.fail + dailyAdd.request_statement_func.fail
                            }
                        }

                        if (keyName === 'cash_withdrawal_func') {
                            cash_withdrawal_func = {
                                total: dailyState.daily.cash_withdrawal_func.total + dailyAdd.cash_withdrawal_func.total,
                                success: dailyState.daily.cash_withdrawal_func.success + dailyAdd.cash_withdrawal_func.success,
                                fail: dailyState.daily.cash_withdrawal_func.fail + dailyAdd.cash_withdrawal_func.fail
                            }
                        }

                        if (keyName === 'open_td_func') {
                            open_td_func = {
                                total: dailyState.daily.open_td_func.total + dailyAdd.open_td_func.total,
                                success: dailyState.daily.open_td_func.success + dailyAdd.open_td_func.success,
                                fail: dailyState.daily.open_td_func.fail + dailyAdd.open_td_func.fail
                            }
                        }

                        if (keyName === 'closure_td_func') {
                            closure_td_func = {
                                total: dailyState.daily.closure_td_func.total + dailyAdd.closure_td_func.total,
                                success: dailyState.daily.closure_td_func.success + dailyAdd.closure_td_func.success,
                                fail: dailyState.daily.closure_td_func.fail + dailyAdd.closure_td_func.fail
                            }
                        }

                        if (keyName === 'transaction_napas') {
                            transaction_napas = {
                                total: dailyState.daily.transaction_napas.total + dailyAdd.transaction_napas.total,
                                success: dailyState.daily.transaction_napas.success + dailyAdd.transaction_napas.success,
                                fail: dailyState.daily.transaction_napas.fail + dailyAdd.transaction_napas.fail
                            }
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
                        pass_onboarding: pass_onboarding,
                        issue_card_func: issue_card_func,
                        create_signature_func: create_signature_func,
                        request_econtract_func: request_econtract_func,
                        request_statement_func: request_statement_func,
                        cash_withdrawal_func: cash_withdrawal_func,
                        open_td_func: open_td_func,
                        closure_td_func: closure_td_func,
                        transaction_napas: transaction_napas
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