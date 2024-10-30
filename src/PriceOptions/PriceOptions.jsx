import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = 
        [
            {
              "id": 1,
              "name": "Basic Package",
              "price": 25,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 complimentary personal training session"
              ]
            },
            {
              "id": 2,
              "name": "Standard Package",
              "price": 45,
              "features": [
                "Access to gym equipment",
                "Locker room and shower access",
                "3 personal training sessions",
                "Access to group classes"
              ]
            },
            {
              "id": 3,
              "name": "Premium Package",
              "price": 70,
              "features": [
                "24/7 gym access",
                "Locker room, shower, and sauna access",
                "5 personal training sessions",
                "Unlimited group classes",
                "Nutrition consultation"
              ]
            },
            {
              "id": 4,
              "name": "VIP Package",
              "price": 120,
              "features": [
                "All-inclusive gym access",
                "Personalized locker",
                "Unlimited personal training",
                "Private group classes",
                "Monthly health and fitness assessment",
                "Access to exclusive VIP lounge"
              ]
            },
            {
              "id": 5,
              "name": "Student Package",
              "price": 20,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "Discount on personal training sessions",
                "Flexible cancellation"
              ]
            }
          ]
          


    return (
        <div className="m-12">
             <h2 className='text-5xl'>Best price in the town.</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;