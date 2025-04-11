# AdministratorApp

This project is an Angular-based web application designed for administrative tasks. It was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Project Structure

The project follows a modular structure for scalability and maintainability:

```
.editorconfig          # Editor configuration
.gitignore             # Git ignore rules
angular.json           # Angular CLI configuration
package.json           # Node.js dependencies and scripts
README.md              # Project documentation
tsconfig*.json         # TypeScript configurations
.vscode/               # VS Code workspace settings
public/                # Static assets (e.g., favicon, i18n files)
src/                   # Application source code
  index.html           # Main HTML file
  main.ts              # Application entry point
  styles.scss          # Global styles
  app/                 # Application modules and components
    core/              # Core services and singleton providers
    features/          # Feature-specific modules and components
    layouts/           # Layout components
    shared/            # Shared components, directives, and pipes
```

## Development Server

To start a local development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you modify source files.

## Code Scaffolding

To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics, run:

```bash
ng generate --help
```

## Building the Project

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. The production build is optimized for performance.

## Running Unit Tests

To execute unit tests using [Karma](https://karma-runner.github.io), run:

```bash
ng test
```

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Note: Angular CLI does not include an e2e testing framework by default. You can integrate one that suits your needs.

## Styling

The project uses SCSS for styling. For example, the sidebar component is styled in `src/app/shared/components/sidebar/sidebar.component.scss`:

```scss
.sidebar {
  width: 250px;
  transition: width 0.3s;
  height: 100%;
}
.sidebar.collapsed {
  width: 80px;
}
.nav-link {
  white-space: nowrap;
}
.nav-link i {
  font-size: 1.2rem;
  min-width: 20px;
  text-align: center;
}
```

## Key Components

### Sidebar Component

The sidebar component is located at `src/app/shared/components/sidebar/`. It is defined in `sidebar.component.ts`:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // Sidebar logic
}
```

### Static Report Card Component

The static report card component is located at `src/app/shared/components/static-report-card/`. Its template is defined in `static-report-card.component.html`:

```html
<div class="card text-center shadow-sm h-100">
  <div class="card-header bg-primary text-white fw-bold">
    {{ header }}
  </div>
  <div class="card-body">
    <h5 class="card-title text-muted">{{ title }}</h5>
    <p class="display-4 fw-semibold text-dark">{{ value }}</p>
  </div>
  <div class="card-footer text-muted">
    {{ description }}
  </div>
</div>
```

## Additional Resources

For more information on using Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
