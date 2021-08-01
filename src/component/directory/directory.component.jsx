import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import selectMenuItem from "../../redux/directory/directory.selector";

import MenuItem from "../menuItem/menuItem.component";
import "./directory.styles.scss";

const Directory = ({ menuItems }) => {
  console.log(menuItems, "menuItem");
  return (
    <div className="directory">
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuItems: selectMenuItem,
});

export default connect(mapStateToProps)(Directory);
