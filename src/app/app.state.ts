import { Tutorial } from './models/tutorial.model';

// Default Status of An APP
export interface AppState {
  readonly tutorial: Tutorial[]; // ue default reducer state
}