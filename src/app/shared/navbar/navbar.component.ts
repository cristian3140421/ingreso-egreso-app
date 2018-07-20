import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filter, map } from 'rxjs/operators';
import { User } from '../../auth/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: User = null;
  userSubscription: Subscription = new Subscription();

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('auth')
              .pipe(
                filter(auth => auth.user != null),
                map(auth => auth.user)
              )
              .subscribe(user=>{
                this.user = user;
    })
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
