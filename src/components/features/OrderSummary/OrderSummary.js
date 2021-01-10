import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({tripCost, options}) => (
  <div className={styles.component}>
    <h2> <strong>{calculateTotal(formatPrice(tripCost), options)}</strong> </h2>
  </div>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
