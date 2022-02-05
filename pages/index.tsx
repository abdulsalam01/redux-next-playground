import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter, randomizeElement, clearElement } from '../redux/actions/counterActions';
import styles from '../styles/Home.module.css'

const Home = (props: any) => {
  return (
    <>
      <div className='container mt-4'>
        <h2 className='text-center'>Counter App Application With Redux</h2>
        <div className='row justify-content-center'>
          <button className='btn btn-primary col-lg-6 m-2' onClick={() => props.incrementCounter(3)}>
            +
          </button>
          {props.counter.value > 0 && <h5 className='text-center'>Count: {props.counter.value}</h5>}
          <button className='btn btn-primary col-lg-6 m-2' onClick={() => props.decrementCounter(3)}>
            -
          </button>
        </div>
        {props.counter.element.length > 0 &&
          <ol>
            {props.counter.element.map((m: string, i: number) => (<li key={i}>{m}</li>))}
          </ol>
        }
        <button onClick={() => props.randomizeElement()}>Add random string</button>
        <button onClick={() => props.clearElement()}>Clear string</button>
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch: any) => ({
  incrementCounter: (data: Number) => dispatch(incrementCounter({ value: data })),
  decrementCounter: (data: Number) => dispatch(decrementCounter({ value: data })),
  ...bindActionCreators({ randomizeElement, clearElement }, dispatch),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
