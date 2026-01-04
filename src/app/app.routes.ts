import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { NotebooksComponent } from './pages/notebooks/notebooks.component';
import { OrderComponent } from './pages/order/order.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notebooks', component: NotebooksComponent },
    { path: 'order/:id', component: OrderComponent },
    { path: 'pens', component: ComingSoonComponent },
    { path: 'office-supplies', component: ComingSoonComponent }
];
