import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent} from './components/signup/signup.component';
import { SigninComponent} from './components/signin/signin.component';
import { AboutComponent} from './components/about/about.component';
import { ContactComponent} from './components/contact/contact.component';
import { AddWatchComponent} from './components/add-watch/add-watch.component';
import { MontreComponent } from './components/montre/montre.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminWatchesComponent } from './components/admin-watches/admin-watches.component';
import { DisplayWatchComponent } from './components/display-watch/display-watch.component';
import { EditWatchComponent } from './components/edit-watch/edit-watch.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'addwatch', component: AddWatchComponent},
  {path: 'listwatch', component: MontreComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminwatches', component: AdminWatchesComponent},
  {path: 'montres/:id', component: DisplayWatchComponent},
  {path: 'editwatch/:id', component: EditWatchComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
