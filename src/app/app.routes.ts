import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EndpointsComponent } from './pages/endpoints/endpoints.component';
import { GetboxComponent } from './components/getbox/getbox.component';
import { GetallclientsComponent } from './pages/getallclients/getallclients.component';
import { LoginboxComponent } from './components/loginbox/loginbox.component';
import { GetclientbyidComponent } from './pages/getclientbyid/getclientbyid.component';
import { GetallclientswithoutdetailsComponent } from './pages/getallclientswithoutdetails/getallclientswithoutdetails.component';
import { GetclientbyidwithoutdetailsComponent } from './pages/getclientbyidwithoutdetails/getclientbyidwithoutdetails.component';
import { DeletebyidComponent } from './pages/deletebyid/deletebyid.component';
import { InsertallvaluesComponent } from './pages/insertallvalues/insertallvalues.component';
import { InsertmandatoryvaluesComponent } from './pages/insertmandatoryvalues/insertmandatoryvalues.component';
import { UpdateclientComponent } from './pages/updateclient/updateclient.component';

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
                component: GetclientbyidComponent
            },
            {
                path: 'getallclientswithoutdetails',
                component: GetallclientswithoutdetailsComponent
            },
            {
                path: 'getclientbyidwithoutdetails',
                component: GetclientbyidwithoutdetailsComponent
            },
            {
                path: 'insertallvalues',
                component: InsertallvaluesComponent
            },
            {
                path: 'insertmandatoryvalues',
                component: InsertmandatoryvaluesComponent
            },
            {
                path: 'deletebyid',
                component: DeletebyidComponent
            },
            {
                path: 'updateclient',
                component: UpdateclientComponent
            }          
        ]
    }
];
