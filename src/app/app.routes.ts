import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ShowcustomersComponent } from './pages/showcustomers/showcustomers.component';
import { NewcustomerComponent } from './pages/newcustomer/newcustomer.component';
import { EditcustomerComponent } from './pages/editcustomer/editcustomer.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'customers',
        component: CustomersComponent,
        children: [
            {
                path: '',
                component: ShowcustomersComponent
            },
            {
                path:'newcustomer',
                component: NewcustomerComponent
            },
            {
                path:'editcustomer/:id',
                component: EditcustomerComponent
            }
        ]
    }
];
