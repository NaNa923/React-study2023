import DayjsExample from './components/Dayjs/DayjsExample';
import MomentExample from './components/Moment/MomentExample';
import DatefnsExample from './components/Datefns/DatefnsExample';

function App() {
  return (
    <div className="App" style={{"textAlign":"center"}}>
      <DatefnsExample />
      <DayjsExample />
      <MomentExample />
    </div>
  );
}

export default App;
