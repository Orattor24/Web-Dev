import {Routes} from '@angular/router';

import {Home} from './home/home';
import {User} from './user/user';

export const routes: Routes = [
  {
    path: '',
    title: 'App HomeComponent Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];

//home.component.ts

import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <div>Home Page</div> `,
})
export class Home {}
