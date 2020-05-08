
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { SubBannerComponent } from './components/sub-banner/sub-banner.component';
import { BrandLogoComponent } from './components/brand-logo/brand-logo.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { DealsComponent } from './components/deals/deals.component';
import { NewsComponent } from './components/news/news.component';
import { MontreComponent } from './components/montre/montre.component';
import { ArticleComponent } from './components/article/article.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddWatchComponent } from './components/add-watch/add-watch.component';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import {InMemoryWebApiModule,HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { WatchComponent } from './components/watch/watch.component'
import { MontreService } from './services/watch.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { AdminWatchesComponent } from './components/admin-watches/admin-watches.component';
import { DisplayWatchComponent } from './components/display-watch/display-watch.component';
import { EditWatchComponent } from './components/edit-watch/edit-watch.component';
import { SearchWatchComponent } from './components/search-watch/search-watch.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ProductComponent,
    OurServicesComponent,
    SubBannerComponent,
    BrandLogoComponent,
    FashionComponent,
    DealsComponent,
    NewsComponent,
    MontreComponent,
    ArticleComponent,
    LogoComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    ContactComponent,
    AddWatchComponent,
    WatchComponent,
    AdminComponent,
    AdminWatchesComponent,
    DisplayWatchComponent,
    EditWatchComponent,
    SearchWatchComponent,
  
  ],
  //il faut vérifier la présence  de : AppRoutingModule (resposable navigation d'un component à un autre)
  //sinon il faut istaller Angular Router par la commande : npm i @angular/router
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [MontreService ,UserService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
