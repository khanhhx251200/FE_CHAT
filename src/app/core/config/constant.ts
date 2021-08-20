import config from 'assets/config.json'

export class Constant {
    public static API_ENDPOINT = config.BACKEND_URL;
    public static API_AUTHEN = config.BACKEND_URL + '/chat-auth/signin';

    public static ERROR_STATUS = {
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        SERVER_ERROR: 500,
        INPUT_ERROR: 422,
        CONFLICT: 409
    };

    public static CHAT = {
        GET_MESSAGE: 'chat-chat/messages',
        GET_CHAT_ROOM: 'chat-chat/messages/chatRoom',
        NO_SORT: 'NO_SORT'
    }

    public static USER = {
        GET_USER_SUMMARIES: 'chat-auth/users/summaries',
        GET_ME: 'chat-auth/users/me',
        GET_LIST_USER: 'users/list'
    }

}
