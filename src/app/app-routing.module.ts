import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./modals/countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'find',
    loadChildren: () => import('./find/find.module').then( m => m.FindPageModule)
  },
  {
    path : 'register-home',
    loadChildren: () => import('./register/register-home/register-home.module').then(m => m.registerHomeModule)
  },
  {
    path : 'register-form',
    loadChildren: () => import('./register/register-form/register-form.module').then(m => m.RegisterFormModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./modals/share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'more-options',
    loadChildren: () => import('./modals/more-options/more-options.module').then(m => m.MoreOptionsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
