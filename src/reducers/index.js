import { combineReducers } from 'redux';
import { accounts } from './accounts';
import { activeAccountIndex } from './activeAccountIndex';
import { listsByUserId } from './listsByUserId';
import { selectedTabByUserId } from './selectedTabByUserId';
import { text } from './text';
import { tabsByUserId } from './tabsByUserId';
import { userByUserId } from './userByUserId';

const rootReducer = combineReducers({
  accounts,
  activeAccountIndex,
  listsByUserId,
  selectedTabByUserId,
  text,
  tabsByUserId,
  userByUserId,
});

export default rootReducer
