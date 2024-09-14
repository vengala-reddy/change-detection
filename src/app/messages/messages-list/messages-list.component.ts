import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MessagesServices } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  // public messages = input.required<string[]>();
  private messagesService = inject(MessagesServices);
  public messages = this.messagesService.allMessages;
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
