import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { NotebooksComponent } from './pages/notebooks/notebooks.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notebooks', component: NotebooksComponent }
];
