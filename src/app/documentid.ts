import {Injectable} from "@angular/core";


@Injectable()
export class CollectionId {
    public newId() {
        const time = (new Date).getTime();
        const r = Math.random();
        return time.toString() + '%' + r.toString().slice(2);
    }
}

