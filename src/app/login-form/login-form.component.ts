import {Doctor} from '../models/doctor';
import {AppService} from '../app.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  doctor = new Doctor('Please input username', '******');
  onSubmit() {
    localStorage.setItem('key', btoa(this.doctor.username + ':' + this.doctor.password));
    this.router.navigate(['/reminder_list']);
  }
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe(params => {
      this.error = params.error;
    });
  }
}
