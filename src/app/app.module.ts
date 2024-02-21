import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotKeysComponent } from './theme/hot-keys/hot-keys.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
// import { AuthInterceptorServices } from '../app/theme/auth/auth.interceptor.service';
import { UserAuthInterceptor } from './user-auth.interceptor';
import { ConnectionServiceModule } from 'ng-connection-service';
import { StrictNumberOnlyDirective } from '././restrictinput';
import { NgPasswordValidatorModule } from 'ng-password-validator';
import { DatatablekitComponent } from './datatablekit/datatablekit.component';

// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { GlobalErrorHandler } from './app.service';
import { ShortcutKeyModule } from './theme/shortcut-key/shortcut-key.module';
import { MinusPipe } from './minus.pipe';

// import { ShortcutKeyComponent } from './theme/shortcut-key/shortcut-key.component';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { ShortcutKeyComponent } from './theme/shortcut-key/shortcut-key.component';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    HotKeysComponent,
    StrictNumberOnlyDirective,
    DatatablekitComponent,
    MinusPipe,
    // ShortcutKeyComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HotkeyModule.forRoot(), // adding HotkeysModule
    ConnectionServiceModule,
    NgPasswordValidatorModule,
    DataTablesModule,
    // InfiniteScrollModule,
    ShortcutKeyModule,

    // translate
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })

    

  ],
  providers: [MenuItems,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }

