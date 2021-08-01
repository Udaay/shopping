import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

const selectMenuItem = createSelector(
  [selectDirectory],
  directory => directory.menuItem
)

export default selectMenuItem;