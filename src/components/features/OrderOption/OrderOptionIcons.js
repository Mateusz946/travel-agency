import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, currentValue, setOptionValue, required }) => (
  <div className={styles.component}>
    {required ? '' : (
      <div onClick={() => (setOptionValue(''))}><Icon name='times-circle' />none</div>
    )}
    {values.map(value => (<div className={value.id == currentValue ? styles.iconActive : styles.icon}
      key={value.id}
      onClick={() => (setOptionValue(value.id))}
    >
      <Icon name={value.icon} />
      {value.name} ({formatPrice(value.price)})

    </div>
    ))}
  </div >
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcons;
