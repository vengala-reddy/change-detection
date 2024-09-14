import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesServices } from '../messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  // public add = output<string>();
  private messagesService = inject(MessagesServices)
  public enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText());
    this.messagesService.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
