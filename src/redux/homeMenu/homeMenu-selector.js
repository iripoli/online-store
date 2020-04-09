import { createSelector } from 'reselect'

const selectHomeMenu = state => state.homeMenu

const selectHomeMenuItems = createSelector(
  [selectHomeMenu],
  homeMenu => homeMenu.itemsData
)

export default selectHomeMenuItems