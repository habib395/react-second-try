import PropTypes from 'prop-types'
export default function Features({feature}) {
  return (
    <div>
        <p>{feature}</p>
    </div>
  )
}

Features.propTypes = {
    feature:PropTypes.string
}