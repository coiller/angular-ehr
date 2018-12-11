import {Pair} from './models/pair';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });
  private url = 'http://localhost:8080/api/doctor/';
  private response;
  constructor(private http: HttpClient, private router: Router) {}
  getReminderList() {
    return this.http.get(this.url + 'reminder_list', {
      headers:
      this.headers.set('Authorization', 'Basic ' + localStorage.getItem('key'))
    });
  }
  getHistoryList(data) {
    return this.http.post(this.url + 'reminder_list/history_reminder', data, {
      headers:
      this.headers.set('Authorization', 'Basic ' + localStorage.getItem('key'))
    });
  }

  newReminder(data) {
    return this.http.post(this.url + 'reminder', data, {
      headers:
      this.headers.set('Authorization', 'Basic ' + localStorage.getItem('key'))
    });
  }
}
