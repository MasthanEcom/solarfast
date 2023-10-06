import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EnteredPostalCodeService {

    private currentAuthState = false;
    returnUrl!: string;

    authState$ = new BehaviorSubject<boolean>(false);


    constructor(private httpClient: HttpClient,
        private router: Router,

        private route: ActivatedRoute,) {
        this.init();
    }


    async storePostalCode(postalcode: string) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

        if (!this.currentAuthState) {

            if (postalcode !== null) {

                localStorage.setItem('data', postalcode)
                this.currentAuthState = true;
                this.authState$.next(this.currentAuthState);
                this.router.navigate([this.returnUrl]).then();


            } else {
                this.currentAuthState = false;
                this.authState$.next(this.currentAuthState);
            }

        } else {
            this.router.navigateByUrl('/').then();
            return;
        }

    }

    closetheWindow() {
        this.currentAuthState = false;
        this.authState$.next(this.currentAuthState);
        this.router.navigateByUrl('/').then();
    }

    init() {
        let data = localStorage.getItem('data');
        if (data !== null) {
            if (data) {
                localStorage.setItem('user', data);
                this.currentAuthState = true;
                this.authState$.next(this.currentAuthState);

            } else {
                this.currentAuthState = false;
                this.authState$.next(this.currentAuthState);
            }
        }



    }

    getAuthState$(): Observable<boolean> {
        return this.authState$.asObservable();
    }

    getCurrentAuthState(): boolean {
        return this.currentAuthState;
    }

}
