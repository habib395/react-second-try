import PropTypes from 'prop-types'
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-300 flex flex-col rounded p-4 text-white'>
           <h2 className='text-center py-2'>
            <span className="text-7xl font-bold">{price}</span>
            <span className="text-3xl">/mon</span>
           </h2>
           <h4 className='text-4xl text-center my-8'>{name}</h4>
          <div className='flex-grow'>
          {
            features.map((feature, index) => <Features key={index} feature={feature}></Features>)
           }
          </div>
           <button className='btn bg-blue-600 w-full font-bold hover:bg-green-950 text-white'>Click Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object
}

export default PriceOption;