import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../components/shared.module";

import {MainComponent} from './main.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [
        MainComponent
    ]
})
export class MainModule {
}
