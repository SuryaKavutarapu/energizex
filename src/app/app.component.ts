import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log('in App constructor');
    const themeOptions = {
      styles: {
        '--icon-color': 'green'
      }
    };
    this.applyTheme(themeOptions);
  }

  applyTheme(options: any): void {
    const rootElement = document.documentElement as HTMLElement;
    if (options) {
      if (options.styles) {
        const styles = options.styles;
        if (Object.keys(styles).length > 0) {
          Object.keys(styles).forEach((key: string) => {
            rootElement.style.setProperty(key, styles[key]);
          });
        }
      }
    }
  }
}
