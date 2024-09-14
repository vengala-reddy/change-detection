import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessagesServices {
    private messages = signal<string[]>([]);
    public allMessages = this.messages.asReadonly();
    addMessage(message: string) {
        this.messages.update(prevMessages => [...prevMessages, message]);
    }
}