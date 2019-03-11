import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './pages/main/main.component';

import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
