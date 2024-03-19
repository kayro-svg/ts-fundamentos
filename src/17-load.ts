import _ from 'lodash';


const data = [
  {
    username: 'kay',
    role: 'admin'
  },
  {
    username: 'sza',
    role: 'seller'
  },
  {
    username: 'pri',
    role: 'seller'
  },
  {
    username: 'cost',
    role: 'costumer'
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log (rta);
