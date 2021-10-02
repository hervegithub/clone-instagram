import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tabs-page/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../tabs-page/seach/seach.module').then(m => m.SeachPageModule)
      },
      {
        path: 'stories',
        loadChildren: () => import('../tabs-page/stories/stories.module').then(m => m.StoriesPageModule)
      },
      {
        path: 'store',
        loadChildren: () => import('../tabs-page/store/store.module').then(m => m.StorePageModule)
      },
      {
        path: 'profiles',
        loadChildren: () => import('../tabs-page/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
