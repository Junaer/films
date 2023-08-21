import { Props } from "../../models";
import Stars from "../Stars/Stars";
import PropTypes from 'prop-types';

export default function Star(props: Props) {
    const {count} = props

    if (count < 1 || count > 5 && typeof(count) == 'number') {
        return null
    }

    const starsArr = Array.from({ length: count }, (v, k) => k+1)

    return (
        <ul className='card-body-stars u-clearfix'>
            {starsArr.map(item => 
                <li key={item}><Stars /></li>
            )}
        </ul>
    )
}

Star.defaultProps = {
    count: 0
}