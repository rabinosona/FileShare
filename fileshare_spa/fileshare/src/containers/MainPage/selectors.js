import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMainPageDomain = state => state.get('mainPage', initialState);

const selectMainPage = createSelector(selectMainPageDomain, substate => substate.toJS());

export default selectMainPage;