import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars(props) {
    let { count } = props;
    const star = Array(count)
        .fill()
        .map((el, idx) => (
          <li key={idx}>
            <Star />
          </li>
    ));
    return (
        count >= 1 && count <=5 && <ul className="card-body-stars">{star}</ul> 
    );
}

Stars.propTypes = {
    count: PropTypes.number,
}

export default Stars;