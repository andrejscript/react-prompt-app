import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Counter from './components/Counter/Counter';
import WrapperContext from './components/WrapperContext/WrapperContext';
import MyContext from './components/WrapperContext/Context';
import Car from './components/Car/Car';
import './App.css';

export const ClickedContext = React.createContext(false);

export default class App extends Component {
  state = {
    clicked: false,
    cars: [
      { name: 'Mazda', year: 2014, id: 1 },
      { name: 'Reno', year: 2016, id: 2 },
      { name: 'BMW', year: 2019, id: 3 },
    ],
    pageTitle: 'Main page title',
    showCars: true,
  };

  onChangeName = (name, index) => {
    const cars = [...this.state.cars];
    const car = cars[index];
    car.name = name;
    this.setState({ cars });
  };

  handleInput = (e) => {
    this.setState({ pageTitle: e.target.value });
  };

  toggleListHandler = () => {
    this.setState({ showCars: !this.state.showCars });
  };

  deleteItem(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  }

  render() {
    const { cars, pageTitle, showCars } = this.state;
    let list = null;

    if (showCars) {
      list = cars.map((car, index) => {
        return (
          <ErrorBoundary key={car.id}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onChangeName={(e) => this.onChangeName(e.target.value, index)}
              onDelete={this.deleteItem.bind(this, index)}
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div className='App'>
        <h1>{pageTitle}</h1>
        <button onClick={this.toggleListHandler}>Toggle list</button>
        {list}
        <input type='text' onChange={this.handleInput} />
        <Counter clicked={this.state.clicked} />
        <hr />
        <button onClick={() => this.setState({ clicked: !this.state.clicked })}>
          Change click
        </button>
        <MyContext.Provider value={{
          name: 'Johny',
          age: 35,
        }}>
          <WrapperContext />
        </MyContext.Provider>
      </div>
    );
  }
}
