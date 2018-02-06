import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AccountService } from './services/account.service';
import { APP_INITIALIZER } from '@angular/core';
import { accountLoader } from './account.loader';
import { AnonymousGuard } from './guards/anonymous.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    AuthService,
    AuthGuard,
    AnonymousGuard,
    AccountService,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule { }
