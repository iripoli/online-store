import  { createSelector } from 'reselect'


export const selectShop = state =>state.shopData

export const selectShopData = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  collections => collections 
  ? Object.keys(collections).map(key=>collections[key]) 
  : []
  )
  

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopData],
    collections => collections 
    ? collections[collectionUrlParam]
    : null
    )
  
