import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {AppService} from './app.service';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {ReminderListComponent} from './reminder-list/reminder-list.component';
import {HistoryReminderComponent} from './history-reminder/history-reminder.component';
import {NewReminderComponent} from './new-reminder/new-reminder.component';
import {HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule,
  MatRippleModule, MatSortModule, MatTableModule, MatIconModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatRippleModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    ReminderListComponent,
    HistoryReminderComponent,
    NewReminderComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
