// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

// Section 2
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {

        console.log('>>> Fire An ADD Tutorial Action');
    }
    // this will take complete TUtorial Model as input for add in default state
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {
        console.log('>>> Fire An Remove Tutorial Action');
    }
    // take a number which will remove tutorial by imdex
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial