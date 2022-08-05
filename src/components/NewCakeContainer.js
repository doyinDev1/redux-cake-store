import React , { useState }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream} from '../redux'
import { buyPuff } from '../redux'
function NewCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const numOficeCreams = useSelector(state => state.iceCream.numOficeCreams)
  const numOfPuffs = useSelector(state => state.puff.numOfPuffs)

  const dispatch = useDispatch()
 const [ number , setNumber] = useState(1)
  return (
    <div>
      {/* <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy Cake</button> */}

<input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
<button onClick={()=> dispatch(buyCake(number))}>Buy {number} Cake</button>

      {/* <h2>Number of Icecream - {numOficeCreams}</h2>
      <button onClick={()=> dispatch(buyIceCream())}>Buy IceCream</button>

      <h2>Number of Puff Puff - {numOfPuffs}</h2>
      <button onClick={()=> dispatch(buyPuff())}>Buy Puff</button> */}

      
    </div>
  )
}


export default NewCakeContainer
