import React from "react";
import PropTypes from "prop-types";

/** Test component */
class Table extends React.Component{



  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  }

  render() {
    const {width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width: width}}>
        <div style={{
          width: this.getWidthAsPercentOfTotalWidth(),
          height: height
        }} >Table Example</div>
      </div>
    );
  }

}

Table.propTypes = {

    /** Bar width */
    width: PropTypes.number.isRequired,

    /** Bar height */
    height: PropTypes.number
};

Table.defaultProps = {
    height: 5
};

export default Table;