import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { TablebookingspageComponent } from './tablebookingspage/tablebookingspage.component';

export const routes: Routes = [
    { path:'', component: HomepageComponent },
    { path: 'aboutus', component: AboutuspageComponent },
    { path: 'services', component: ServicespageComponent },
    { path: 'contactus', component: ContactuspageComponent },
    { path: 'tablebookings', component: TablebookingspageComponent }
];
