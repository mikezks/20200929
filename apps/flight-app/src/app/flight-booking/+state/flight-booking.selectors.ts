import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFlightBooking from './flight-booking.reducer';

export const selectFlightBookingState = createFeatureSelector<fromFlightBooking.State>(
  fromFlightBooking.flightBookingFeatureKey
);

export const selectFlights = createSelector(
  // Selectors
  selectFlightBookingState,
  /* selectActiveUser, */
  // Projector
  (state/* , user */) => {
    return state.flights;
  }
);
