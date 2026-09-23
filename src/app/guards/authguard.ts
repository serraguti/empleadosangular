import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate
    , GuardResult, MaybeAsync, Router, RouterStateSnapshot }
     from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    MaybeAsync<GuardResult> {
        //RECUPERAMOS EL TOKEN
        const token = localStorage.getItem("TOKEN");
        if (token){
            //DEJAMOS LIBRE EL ACCESO AL COMPONENT
            return true;
        }else{
            //SI EL USUARIO NO ESTA AUTORIZADO (sin token)
            //LO LLEVAMOS A LA PAGINA DE LOGIN
            return this._router.createUrlTree(['/login']
                ,{ queryParams: {returnUrl: state.url}});
        }
    }
}