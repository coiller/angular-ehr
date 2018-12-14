import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AppService {
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });
  private url = 'http://localhost:8080/api/doctor/';
  private response;

  constructor(private http: HttpClient, private router: Router) {
  }

  getReminderList() {
    return this.http.get(this.url + 'reminder_list', {
      headers:
        this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('Bearer'))
    });
  }

  getHistoryList(data) {
    return this.http.post(this.url + 'reminder_list/history_reminder', data, {
      headers:
        this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('Bearer'))
    });
  }

  login(user) {
    return this.http.post('http://localhost:8080/api/login', user);
  }

  newReminder(data) {
    return this.http.post(this.url + 'reminder', data, {
      headers:
        this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('Bearer'))
    });
  }
}
