# Ngx Urdu Input

Welcome to Ngx Urdu Input, an Angular directive that allows users to input Urdu text in text fields using a customized keyboard layout.

## Installation

To integrate this directive into your Angular application, follow these simple steps:

1. **Install the Package:**

    ```bash
    npm install ngx-urdu-input
    ```

2. **Import the Module:**

   Import the `NgxInputUrduModule` into your app module:

    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxInputUrduModule } from 'ngx-urdu-input';

    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, NgxInputUrduModule],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    ```

3. **Use the Directive:**

   Apply the `ngxInputUrdu` directive to your input field:

    ```html
    <input ngxInputUrdu type="text" [(ngModel)]="urduText" />
    ```

## Usage

By using the `ngxInputUrdu` directive, users can conveniently input Urdu text in text fields.

**Note:** It may be necessary to adjust your app's styling to ensure proper rendering of Urdu characters.

## Credits

This directive is an Angular adaptation of the original Vanilla JS plugin [JavaScript-UrduTextBox](https://github.com/naseem1amjad/JavaScript-UrduTextBox) developed by [Naseem Amjad](https://github.com/naseem1amjad). The plugin has been transformed into an Angular directive by [Muhammad Usman](https://github.com/musmanpak).

## GitHub Repository

Find the source code for this project on [GitHub](https://github.com/musmanpak/ngx-urdu-input).

## NPM Package

This package is published on [NPM](https://www.npmjs.com/package/ngx-urdu-input) under the name `ngx-urdu-input`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
