import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Store Inline Template</h1>
  `,
  styles: [`
    h1 { color: hotpink; }
  `]
})
export class AppComponent {
  title = 'store';
}
