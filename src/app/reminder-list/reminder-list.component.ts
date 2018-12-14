import {AppService} from '../app.service';
import {Pair} from '../models/pair';
import {report} from '../models/report';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatIconRegistry, MatSort, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

declare var Chart: any;

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {

  displayedColumns = ['name', 'unfinished_high', 'unfinished_middle', 'unfinished_low', 'new_reminder'];
  dataSource: MatTableDataSource<Pair>;
  private hidden = true;
  private chart = false;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: AppService, private router: Router,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add-alert',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/add-alert.svg'));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addAlert(row) {

  }

  logout() {
    localStorage.clear();
    this.service.logout();
    this.router.navigate(['/login']);
  }

  showChart(row) {
    var ctx = document.getElementById('myChart');
    let data = JSON.stringify({'pair_id': row.pair_id});
    this.service.getHistoryList(data).subscribe((response: report[]) => {
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: response.map(x => x.date),
          datasets: [{
            data: response.map(x => x.num),
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      });
    }, error => {
      if (localStorage.getItem('Bearer') === null) {
        // didn't login
        this.router.navigate(['/login'], {queryParams: {error: 'Please login first'}});
      } else {
        this.router.navigate(['/login'], {queryParams: {error: 'Invalide Username or Password'}});
        localStorage.clear();
      }
    }, () => this.chart = false);
  }

  ngOnInit() {
    this.service.getReminderList().subscribe(response => {
      this.dataSource = new MatTableDataSource(response as Pair[]);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data, filter: string) => {
        const accumulator = (currentTerm, key) => {
          return key === 'patient' ? currentTerm + data.patient.name : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        // Transform the filter by converting it to lowercase and removing whitespace.
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };
    }, error => {
      if (localStorage.getItem('Bearer') === null) {
        // didn't login
        this.router.navigate(['/login'], {queryParams: {error: 'Please login first'}});
      } else {
        this.router.navigate(['/login'], {queryParams: {error: 'Invalide Username or Password'}});
        localStorage.clear();
      }
    }, () => this.hidden = false);
    const url = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
  }
}
