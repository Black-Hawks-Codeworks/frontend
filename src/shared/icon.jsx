import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Icons } from '@/assets/icons';
import styles from './icon.module.css';

// Map size values to CSS class names
const sizeClassMap = {
  xs: styles.sizeXs,
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  xl: styles.sizeXl,
};

// Map color variant values to CSS class names
const variantClassMap = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
};

function Icon(props) {
  const name = props.name;
  const size = props.size || 'md';
  const colorVariant = props.colorVariant;
  const sizePx = props.sizePx;
  const className = props.className;
  const containerClassName = props.containerClassName;

  // Get the SVG component
  const SvgComponent = Icons[name];

  if (!SvgComponent) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  // Validate that we have a valid React component
  if (typeof SvgComponent !== 'function' && typeof SvgComponent !== 'object') {
    console.warn(`Icon "${name}" is not a valid React component. Got:`, typeof SvgComponent);
    return null;
  }

  // Get size and variant classes from maps
  const sizeClass = sizeClassMap[size];
  const variantClass = colorVariant ? variantClassMap[colorVariant] : null;

  // Calculate container class name
  const containerClasses = clsx(styles.iconContainer, sizeClass, variantClass, containerClassName);

  // Calculate style for custom size
  const customStyle = sizePx
    ? {
        '--icon-size': `${sizePx}px`,
        '--icon-container-size': `${sizePx}px`,
      }
    : undefined;

  // Calculate icon className - clsx returns a string or undefined
  const iconClassName = clsx(styles.icon, className);

  return (
    <div className={containerClasses} style={customStyle}>
      <SvgComponent className={iconClassName || undefined} tabIndex={-1} aria-hidden={true} />
    </div>
  );
}

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  sizePx: PropTypes.number,
  colorVariant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default Icon;
