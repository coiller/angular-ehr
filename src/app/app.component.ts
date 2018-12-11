import {AppService} from './app.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
}
