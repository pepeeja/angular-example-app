import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then((module) => module.HomePageModule),
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films-page/films-page.module').then((module) => module.FilmsPageModule),
  },
  {
    path: 'films/:title',
    loadChildren: () =>
      import('./pages/films-details-page/films-details-page.module').then((module) => module.FilmsDetailsPageModule),
  },
  {
    path: '404',
    loadChildren: () => import('./pages/404-page/404-page.module').then((module) => module.NotFoundPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/404-page/404-page.module').then((module) => module.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
