import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-message',
  standalone: true,
  imports: [],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMessageComponent {
  public get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return 'InfoMessage Component Debug Output';
  }

  public onLog() {
    console.log('clicked!');
  }
}
