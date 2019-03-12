import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './player/player-form/player-form.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { SharedService } from './shared/shared-service.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlayerService } from './service/player.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerFormComponent,
    PlayerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
