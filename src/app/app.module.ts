import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from './core/core.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {environment} from '../environments/environment';

//Common
import {SharedModule} from './components/shared.module';

//Service
import {TitleService} from './service/title.service';
import {Api} from "./util/api.util";
import {LanguageService} from "./service/langulage.service";

//Controller

//Pipe
import {TimestampPipe} from "./pipes/timestamp.pipe";

//Page Module
import {MainModule} from './pages/main/main.module';

//Component

//translate server
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        CoreModule,
        NgxsModule.forRoot([]),
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        MainModule,//首页
    ],
    entryComponents: [

    ],
    providers: [
        TitleService, // 设置title标题
        LanguageService,//语言服务
        Api,//Api集合
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
