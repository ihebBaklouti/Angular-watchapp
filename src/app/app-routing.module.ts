import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent} from './components/signup/signup.component';
import { SigninComponent} from './components/signin/signin.component';
import { AboutComponent} from './components/about/about.component';
import { ContactComponent} from './components/contact/contact.component';
import { AddWatchComponent} from './components/add-watch/add-watch.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'addwatch', component: AddWatchComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
