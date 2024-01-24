import React from 'react';

const title = 'React';
const arr = ['Bobby', 'Liza', 'George']

function App() {
    
    return (
      <div>
          <h1>
          {(function(){return 'Hello'})()}
          {
            arr.map(function(el){
              return (', ') + el;
            })
          }!
          </h1>
      </div>
    );
}

export default App;
