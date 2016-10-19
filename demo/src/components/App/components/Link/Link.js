import styles from './Link.less';

import React, { PropTypes } from 'react';

const Link = props => {
  const { className, href, underline, children } = props;
  const klass =
    (className === null ? '' : className + ' ') +
    (underline ? styles.linkWithUnderline : styles.linkWithoutUnderline);

  return (
    <a className={klass} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Link.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    underline: PropTypes.bool.isRequired,
    children: PropTypes.node
  };
}

Link.defaultProps = {
  className: null,
  underline: true
};

export default Link;
