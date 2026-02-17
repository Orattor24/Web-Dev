import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          help me pls
        </p>
        <p>
          help
        </p>
        <p>
          hr;p
        </p>
        <p>
          gfgl
        </p>
        <p>
          Lorum Ipsum
        </p>
        <p>
          Lorum idpfjnfkfkv
        </p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [Comments],
})
export class App {}
