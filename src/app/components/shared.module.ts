import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from '@ngx-translate/core'



import {TimestampPipe} from "../pipes/timestamp.pipe";

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        TimestampPipe,
    ],
    exports: [
        FormsModule,
        TimestampPipe,
        TranslateModule,
    ]
})
export class SharedModule {
}
