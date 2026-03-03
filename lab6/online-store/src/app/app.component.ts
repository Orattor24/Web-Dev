import { Component} from "@angular/core";
import { RouterOutlet} from "@angular/router";

@Component({
  selector: "my-app",
  imports: [RouterOutlet],
  template: `<div>
    <h1>Приложение Angular</h1>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {}
