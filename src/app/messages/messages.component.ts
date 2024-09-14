import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NewMessageComponent } from "./new-message/new-message.component";
import { MessagesListComponent } from "./messages-list/messages-list.component";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NewMessageComponent, MessagesListComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
  // public messages = signal<string[]>([]);
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
  // onAddMessage(message: string) {
  //   this.messages.update((oldMessages) => [...oldMessages, message]);
  // }
}
