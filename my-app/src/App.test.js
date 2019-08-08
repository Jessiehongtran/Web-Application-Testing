import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// describe('App.js', ()=> {
//   describe('handleBall()', ()=> {
//     it('should return this', ()=>{
//     expect(handleBall(3)).toBe(0)
//   })
// })


// })
