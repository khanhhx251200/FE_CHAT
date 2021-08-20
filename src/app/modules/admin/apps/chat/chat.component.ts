import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector       : 'chat',
    templateUrl    : './chat.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit
{
    ngOnInit(): void {
        console.log('chat');
    }
    /**
     * Constructor
     */
    constructor()
    {
    }
}
