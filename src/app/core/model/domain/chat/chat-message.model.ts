export class ChatMessage {
    id: string;
    chatId: string;
    senderId: String;
    recipientId: string;
    senderName: string;
    recipientName: string;
    content = '';
    timestamp!: Date;
    active:boolean;
    idForwarMess!:string;
    shortcutContent!:string;
    forwardContent :string;
    isEditing!: boolean;
    type!:string;
    isSearch!: boolean;

    constructor() {
        this.id = '';
        this.chatId = '';
        this.senderId = '';
        this.recipientId = '';
        this.senderName = '';
        this.recipientName = '';

        this.active = true;
        this.forwardContent = '';

    }
}
