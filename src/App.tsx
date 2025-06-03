import Alert from './components/Alert'
import ListGroup from './components/ListGroup'
import { Button } from './components/Button';
function App(){
  let capitals=[
      'Albany',
      'Trenton',
      'Concord',
      'Santa Fe',
      'Providence'
  ];
      
  return <div>
    <Alert><span>Hello friend</span></Alert>
    <ListGroup items={capitals} heading={'State Capitals'}></ListGroup>
    <Button color = "primary" onclick={()=> console.log('Clicked')}>My Button</Button>
    </div>
}
export default App
