import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'flight-workspace-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css']
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {
  timer$: Observable<number>;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.rxjsDemo();
  }

  rxjsDemo(): void {
    this.timer$ = timer(0, 1000)
      .pipe(
        tap(num => console.log('Log aus Stream', num))
      );

    //this.subscription = this.timer$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
