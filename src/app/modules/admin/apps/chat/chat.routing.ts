import { Route } from '@angular/router';
import { ChatChatResolver, ChatChatsResolver, ChatContactsResolver, ChatProfileResolver } from 'app/modules/admin/apps/chat/chat.resolvers';
import { ChatComponent } from 'app/modules/admin/apps/chat/chat.component';
import { ChatsComponent } from 'app/modules/admin/apps/chat/chats/chats.component';
import { ConversationComponent } from 'app/modules/admin/apps/chat/conversation/conversation.component';

export const chatRoutes: Route[] = [
    {
        path     : '',
        component: ChatComponent,
        // resolve  : {
        //     chats   : ChatChatsResolver,
        //     profile : ChatProfileResolver
        //     contacts: ChatContactsResolver,
        // },
        children : [
            {
                path     : '',
                component: ChatsComponent,
                children : [
                    {
                        path     : '',
                        component: ConversationComponent,
                        children : [
                            {
                                path   : ':id',
                                resolve: {
                                    conversation: ChatChatResolver
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
