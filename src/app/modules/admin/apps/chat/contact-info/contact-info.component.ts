import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Chat, Contact } from 'app/modules/admin/apps/chat/chat.types';

@Component({
    selector       : 'chat-contact-info',
    templateUrl    : './contact-info.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoComponent implements OnInit
{
    @Input() chat: Chat;
    @Input() drawer: MatDrawer;

    ngOnInit(): void {
        console.log('contact')
    }
    /**
     * Constructor
     */
    constructor()
    {
    }
}
