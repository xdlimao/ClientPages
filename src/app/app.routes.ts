import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EndpointsComponent } from './pages/endpoints/endpoints.component';
import { GetboxComponent } from './components/getbox/getbox.component';
import { GetallclientsComponent } from './pages/getallclients/getallclients.component';
import { LoginboxComponent } from './components/loginbox/loginbox.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'endpoints',
        component: EndpointsComponent,
        children: [
            {
                path: 'getallclients',
                component: GetallclientsComponent
            },
            {
                path: 'getclientbyid',
                component: LoginboxComponent
            },
            {
                path: 'getallclientswithoutdetails',
                component: LoginboxComponent
            },
            {
                path: 'getclientbyidwithoutdetails',
                component: LoginboxComponent
            },
            {
                path: 'insertallvalues',
                component: LoginboxComponent
            },
            {
                path: 'insertmandatoryvalues',
                component: LoginboxComponent
            },
            {
                path: 'deletebyid',
                component: LoginboxComponent
            },
            {
                path: 'updateclient',
                component: LoginboxComponent
            }          
        ]
    }
];
