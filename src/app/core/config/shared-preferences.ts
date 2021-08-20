import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedPreferences {
    public static IS_LOADING_CONTEN = false;

    getDataLocal(code: string) {
        let data = localStorage.getItem(code);
        if (data != undefined)
            return JSON.parse(data);
    }

    setDataLocal(code: string, data: any) {
        localStorage.setItem(code, JSON.stringify(data));
    }

    delDataLocal(code: string) {
        localStorage.removeItem(code);
    }
}