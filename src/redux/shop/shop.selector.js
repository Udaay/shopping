import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collection => Object.keys(collection).map(key => collection[key]) 
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collection => collection[collectionUrlParam]
);