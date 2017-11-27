import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {

  isLoading: boolean = false;
  
      loadingChange: Subject<boolean> = new Subject<boolean>();
  
      constructor()  {
      }
  
      toggleLoading() {
          this.loadingChange.next(!this.isLoading);
      }
      setLoading(loading : boolean) {
        this.loadingChange.next(loading);
    }
}
