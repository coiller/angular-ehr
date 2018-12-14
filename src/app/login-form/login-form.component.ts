import {Doctor} from '../models/doctor';
import {AppService} from '../app.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;

  doctor = new Doctor(null, null);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: AppService) {
  }

  onSubmit() {
    // localStorage.setItem('key', btoa(this.doctor.username + ':' + this.doctor.password));
    this.service.login(this.doctor).subscribe(response => {
      localStorage.setItem('Bearer', response['token']);
      this.router.navigate(['/reminder_list']);
    }, error => {
      this.error = error.error.message;
    });
  }

  ngOnInit() {
    // subscribe to router event
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.error = params.error;
    // });
    if (localStorage.getItem('Bearer')) {
      this.router.navigate(['/reminder_list']);
    }
  }
}
