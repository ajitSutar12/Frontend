import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomdocComponent } from './customdoc.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor'

import { CustomerDocModule } from '../../app/theme/view/customer-doc/customer-doc.module';
import { CustomdocRoutingModule } from './customdoc-routing.module';
@NgModule({
    imports: [
        CommonModule,
        CustomdocRoutingModule,
        CustomerDocModule

    ],
    declarations: [CustomdocComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UserAuthInterceptor,
            multi: true
        },]
})

export class CustomdocModule { }



