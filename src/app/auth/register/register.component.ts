import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subscription: Subscription;

  constructor(public authServices: AuthService,
              public Store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.Store.select('ui').subscribe(ui=> this.cargando = ui.isLoading);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(data:any){
    console.log(data);
    this.authServices
        .crearUsuario(
            data.nombre,data.email,data.password);
    
  }

}
