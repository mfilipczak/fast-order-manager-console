import { Component , OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { Location }    from '@angular/common';
import { Router }   from '@angular/router';
import {LoadingService} from './loading.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  activePage:string = 'dashboard';
  badgeSize: number = 0;
  loading:boolean = false;
  title = 'Fast Order Manager Console';

  constructor( private location: Location, router: Router, loadingService: LoadingService, private cdr: ChangeDetectorRef) {
    loadingService.loadingChange.subscribe((value) => {
      console.log("chane " +value);
      this.loading = value
      cdr.markForCheck();
    });
    router.events.subscribe((val) => {
      if(location.path().replace("/","") != ''){
        this.activePage = location.path().replace("/","");
      } else {
        this.activePage = 'dashboard';
      }
    });
}

  setActivePage(page : string) : void {
    this.activePage = page;
    this.badgeSize = 0;
  }

  ngOnInit(): void {
      this.cdr.markForCheck();
      if(this.location.path().replace("/","") != ''){
        this.activePage = this.location.path().replace("/","");
      } else {
        this.activePage = 'dashboard';
      }
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
