import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions  from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

    // Section 1
    tutorials: Observable<Tutorial[]>;
    
  constructor(private store: Store<AppState>) { 
    // used to select reducer from store in app.module.ts file
    this.tutorials = store.select('tutorial');
  }

  delTutorial(index){
    console.log('>>> IN Delete Tutorial >>>>');
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {
  }

}
