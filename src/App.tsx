import React from 'react';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: 'The Beastie Boys',
    members: 'Ad Rock, MCA, Mike D',
    formed: 1979,
  },
  {
    name: 'Wolfmother',
    members: 'Andrew Stockdale, Hamish Rosser, Bobby Poulton',
    formed: 2004,
  },
  {
    name: 'Cream',
    members: 'Eric Clapton, Jack Bruce, Ginger Baker',
    formed: 1966,
  },
  {
    name: 'Nirvana',
    members: 'Kurt Cobain, Dave Groul, Krist Novoselic',
    formed: 1987,
  },
];

function Welcome() {
  return <h1>The Best Music Trios Ever</h1>;
}

class Band extends React.Component<BandProps> {
  // This is a component- similar to a function but different
  render() {
    const oneBand = this.props;

    return (
      <div>
        <img></img>
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  // this is a function
  return (
    // These components need to be wrapped in a div tag; it has to be just one thing being returned
    <div>
      {/* <Band {...bandNames[0]} />
      <Band {...bandNames[1]} />
      <Band {...bandNames[2]} /> 
      
      Instead of doing it this way ^ (it gets harder as data increases), do it this way below: */}

      {bandNames.map((bandNum) => (
        <Band {...bandNum} />
      ))}
    </div>
  );
}

function App() {
  // default main view

  return (
    // Here we call that function
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
