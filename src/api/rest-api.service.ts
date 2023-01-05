import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class RestApiService {
    // Define API
    apiURL = 'https://wr8frk3uf8.execute-api.ap-southeast-1.amazonaws.com/uat/api/dashboard-log';
    constructor(private http: HttpClient) { }
    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/
    // HttpClient API get() method => Fetch employees list
    getToken() {
        return 
    }

    getDataOnboarding(auth_token, body) {
        return this.http.post(
            this.apiURL, 
            JSON.stringify(body),
            { 
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${auth_token}`
                })
            }
        ).pipe(retry(1), catchError(this.handleError));
    }

    // getAllItems(nameTable) {
    //     let searchParams = new HttpParams();
    //     searchParams = searchParams.append('table', nameTable);
    //     return this.http.get(
    //         this.apiURL + '/getAllItems',
    //         {
    //             headers: this.httpOptions.headers,
    //             params: searchParams,
    //         }
    //     ).pipe(retry(1), catchError(this.handleError));
    // }

    // getItem(nameTable, itemId) {
    //     let searchParams = new HttpParams();
    //     searchParams = searchParams.append('table', nameTable);
    //     searchParams = searchParams.append('itemId', itemId);
    //     return this.http.get(
    //         this.apiURL + '/getItem',
    //         {
    //             headers: this.httpOptions.headers,
    //             params: searchParams,
    //         }
    //     ).pipe(retry(1), catchError(this.handleError));
    // }

    // updateItem(nameTable, item) {
    //     let searchParams = new HttpParams();
    //     searchParams = searchParams.append('table', nameTable);
    //     return this.http.put(
    //         this.apiURL + '/updateItem',
    //         item,
    //         {
    //             headers: this.httpOptions.headers,
    //             params: searchParams,
    //         }
    //     ).pipe(retry(1), catchError(this.handleError));
    // }


    // Error handling
    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}