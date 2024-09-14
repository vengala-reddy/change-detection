import { ChangeDetectionStrategy, Component,NgZone,OnInit,inject, signal } from '@angular/core';
import { InfoMessageComponent } from "../info-message/info-message.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [InfoMessageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  // private zone = inject(NgZone);
  public count = signal(0);
  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit() {
    setTimeout(() => {
      this.count.set(0);
    },4000);
    // this.zone.runOutsideAngular(() => {
      setInterval(() => {
        console.log('Timer expired!');
      }, 5000);
    // });
  }

  public onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  public onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
