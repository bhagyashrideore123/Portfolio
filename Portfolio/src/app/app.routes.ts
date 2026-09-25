import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
    {
        path:"",
        component:Home
    },
    {
        path:"legal-notice",
        component:LegalNotice
    },
    {
        path:"**",
        component:NotFound
    }


];
