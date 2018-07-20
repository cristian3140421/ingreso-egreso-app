import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filter, map } from 'rxjs/operators';
import { User } from '../../auth/user.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription :Subscription = new Subscription();

  constructor(private authServices: AuthService,
              private store: Store<AppState>,
              private ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.userSubscription = this.store.select('auth')
                .pipe(
                  filter(auth => auth.user != null),
                  map(auth => auth.user)
                )
                .subscribe(user=>{
                  this.user = user;
      })    
  }
  
  logout(){
    this.authServices.logout();
    this.ingresoEgresoService.cancelarSubscriptions();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }


}
