import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    AuthService
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule { }
