import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

export interface User {
  name: string;
}

@Injectable()
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  private user$: Subject<User> = new BehaviorSubject<User>({name: 'No user'});

  constructor(private store: AngularFirestore) {
      this.collection = store.collection('user');
  }

  public set(user: User) {
    this.user$.next(user);
    this.collection.add(user);
  }

  public user(): Observable<User> {
    return this.user$.asObservable();
  }

}
