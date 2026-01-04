import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { NotebooksComponent } from './pages/notebooks/notebooks.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notebooks', component: NotebooksComponent },
    { path: 'order/:id', component: OrderComponent }
];
