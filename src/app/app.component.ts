import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div color="primary">
      <span>LocalCast Weather</span>
    </div>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <div fxFlex="300px">
        <div>
          <div><div class="mat-headline">Current Weather</div></div>
        </div>
        <div>
          <app-current-weather></app-current-weather>
        </div>
      </div>
      <div fxFlex></div>
    </div>
  `,
})
export class AppComponent {}
