import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../component/collectionOverview/collectionOverview.component";
import CollectionPage from "../collectionPage/collection.component";

const ShopePage = ({ match }) => {
  return (
    <div className="shopePage">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopePage;
