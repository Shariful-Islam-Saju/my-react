import './App.css';
import Card from './Elements/card/card';
//import data from './data.json';
import CardList from './Elements/card/cardList';
function App() {
  return (
    <div className="App">
      <div>
        <h1 className="heading">Study With Shariful Islam</h1>
        <div className="notblock">
          {/* <Card title="This is Card 1" body="My name is Card " />
          <Card  title="Card 2" body="Hi, it's me! Another Card" /> */}
          <div className="row row-gap-4">
            {CardList.map(Element => (
              <Card key={Element.id} title={Element.title} body={Element.body} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
