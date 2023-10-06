import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EnteredPostalCodeService } from 'src/app/services/googlemaps/enteredpostalcode.service';

@Injectable({
  providedIn: 'root'
})


export class PostalCodeGuard implements CanActivate {
  constructor (private authService:EnteredPostalCodeService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.getCurrentAuthState()) {
        return true;
      } else {
        this.router.navigate(['/welcome/dashboard'], {queryParams: {returnUrl: state.url}}).then();
        return false;
      }
  }
  
}
