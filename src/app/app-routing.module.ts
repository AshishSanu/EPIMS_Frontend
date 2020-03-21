import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./Login/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'user-roles',
    loadChildren: () => import('./UserRoles/user-roles/user-roles.module').then( m => m.UserRolesPageModule)
  },
  {
    path: 'add-user-roles',
    loadChildren: () => import('./UserRoles/add-user-roles/add-user-roles.module').then( m => m.AddUserRolesPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./Users/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./Users/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./Users/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'view-poles',
    loadChildren: () => import('./Poles/view-poles/view-poles.module').then( m => m.ViewPolesPageModule)
  },
  {
    path: 'add-edit-pole',
    loadChildren: () => import('./Poles/add-edit-pole/add-edit-pole.module').then( m => m.AddEditPolePageModule)
  },
  {
    path: 'view-work-details',
    loadChildren: () => import('./Work/view-work-details/view-work-details.module').then( m => m.ViewWorkDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
