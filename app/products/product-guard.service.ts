import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path; // url: product/10 -> getting numeric part (id)
        if(isNaN(id) || id <1){
            alert('Invalid product Id');
            //strat a new navigation to redirect to list page
            this._router.navigate(['/products']);
            //abort current navigationreturn false;
        }
        return true;
    }
}