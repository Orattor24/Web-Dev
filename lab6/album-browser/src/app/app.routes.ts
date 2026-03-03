import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, [cite: 38]
{ path: 'home', component: HomeComponent }, [cite: 39]
{ path: 'about', component: AboutComponent }, [cite: 40]
{ path: 'albums', component: AlbumsComponent }, [cite: 41]
{ path: 'albums/:id', component: AlbumDetailComponent }, [cite: 42]
{ path: 'albums/:id/photos', component: AlbumPhotosComponent } [cite: 44]
];
