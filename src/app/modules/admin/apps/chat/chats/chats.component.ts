import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Chat, Profile} from 'app/modules/admin/apps/chat/chat.types';
import {ChatService} from 'app/modules/admin/apps/chat/chat.service';
import {Router} from "@angular/router";
import {AuthService} from "../../../../../core/auth/auth.service";
import {Constant} from "../../../../../core/config/constant";
import * as SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs";
import {ChatMessage} from "../../../../../core/model/domain/chat/chat-message.model";

@Component({
    selector: 'chat-chats',
    templateUrl: './chats.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsComponent implements OnInit, OnDestroy {
    chats: Chat[];
    drawerComponent: 'profile' | 'new-chat';
    drawerOpened: boolean = false;
    filteredChats: Chat[];
    profile: Profile;
    selectedChat: Chat;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private senderId: any;
    stompClient: any;
    topic: any;
    disabled = true;
    messages: ChatMessage[] = [];
    activeUser: any;
    subscription!: Subscription;
    chatRoomId = "";


    /**
     * Constructor
     */
    constructor(
        private _chatService: ChatService,
        private authService: AuthService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        console.log('chat')
        // this.connect();
        // Chats
        // this._chatService.chats$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((chats: Chat[]) => {
        //         this.chats = this.filteredChats = chats;
        //
        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
        //
        // // Profile
        // this._chatService.profile$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((profile: Profile) => {
        //         this.profile = profile;
        //
        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
        //
        // // Selected chat
        // this._chatService.chat$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((chat: Chat) => {
        //         this.selectedChat = chat;
        //
        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    connect() {
        this.senderId = this.authService.idUser;
        console.log('Initialize WebSocket Connection');
        let url = Constant.API_ENDPOINT + '/ws';
        console.log(url);
        let ws = new SockJS(url);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame: any) {
            console.log("load message")
            _this.setConnected(true);
            console.log('Connected: ' + frame);
            _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
                _this.loadMessage();
            });
            //_this.stompClient.reconnect_delay = 2000;
        });
    }

    setConnected(connected: boolean) {
        this.disabled = !connected;

        if (connected) {
            this.messages = [];
        }
    }

    loadMessage() {
        const recipientId = this.activeUser?.id;

        this.subscription = this._chatService
            .getMessage(this.senderId, recipientId)
            .subscribe((data: any) => {
                this.messages = data;
                console.log('message', this.messages);
            });
        this.subscription = this._chatService
            .getChatRoomId(this.senderId, recipientId)
            .subscribe((data: any) => {
                this.chatRoomId = data;
                console.log(this.chatRoomId);

            });
    }


    // /**
    //  * Filter the chats
    //  *
    //  * @param query
    //  */
    // filterChats(query: string): void {
    //     // Reset the filter
    //     if (!query) {
    //         this.filteredChats = this.chats;
    //         return;
    //     }
    //
    //     this.filteredChats = this.chats.filter(chat => chat.contact.name.toLowerCase().includes(query.toLowerCase()));
    // }
    //
    // /**
    //  * Open the new chat sidebar
    //  */
    // openNewChat(): void {
    //     this.drawerComponent = 'new-chat';
    //     this.drawerOpened = true;
    //
    //     // Mark for check
    //     this._changeDetectorRef.markForCheck();
    // }
    //
    // /**
    //  * Open the profile sidebar
    //  */
    // openProfile(): void {
    //     this.drawerComponent = 'profile';
    //     this.drawerOpened = true;
    //
    //     // Mark for check
    //     this._changeDetectorRef.markForCheck();
    // }
    //
    // /**
    //  * Track by function for ngFor loops
    //  *
    //  * @param index
    //  * @param item
    //  */
    // trackByFn(index: number, item: any): any {
    //     return item.id || index;
    // }

    signOut(): void {
        this._router.navigate(['/sign-out']);
    }
}
