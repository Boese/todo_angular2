import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  {
    path: 'keep',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/keep',
    pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);
