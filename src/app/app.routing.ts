import {HistoryReminderComponent} from './history-reminder/history-reminder.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {NewReminderComponent} from './new-reminder/new-reminder.component';
import {ReminderListComponent} from './reminder-list/reminder-list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginFormComponent},
  {path: 'reminder_list', component: ReminderListComponent},
  {path: 'reminder_list/history_reminder', component: HistoryReminderComponent},
  {path: 'reminder', component: NewReminderComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouting {}