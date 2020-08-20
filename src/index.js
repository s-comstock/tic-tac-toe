import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ===================================
/* Square */
function Square(props) {
  return (
    <button className="board-square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

// =====================================
/* Board */
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// =======================================
/* Game */
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  newGame() {
    this.setState({
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: this.state.xIsNext === true ? false : true,
    })
  }

  previous() {
    const step = this.state.stepNumber;
    if (step > 0) {
      this.setState({
        stepNumber: step - 1,
        xIsNext: (step % 2) === 0, // tests if the number we're changing StepNumber to is even
      })
    }
  }

  next() {
    const step = this.state.stepNumber;
    const nextMove = this.state.history[this.state.stepNumber + 1];
    if (typeof nextMove !== 'undefined') {
      this.setState({
        stepNumber: step + 1,
        xIsNext: (step % 2) === 0, // tests if the number we're changing StepNumber to is even
      })
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-stats">
          <h1 className="game-title">TIC TAC TOE</h1>
          <hr></hr>
          <p className="game-turn">{status}</p>
          <div className="game-buttons-row">
            <button className="game-buttons game-buttons_half-width-left" onClick={() => this.previous()}>&#8678; Step Back</button>
            <button className="game-buttons game-buttons_half-width-right" onClick={() => this.next()}>Step Forward &#8680;</button>
          </div>
          <div className="game-buttons-row">
            <button className="game-buttons game-buttons_full-width" onClick={() => this.newGame()}>New Game</button>
          </div>
        </div>
        <div className="board">
          <Board
          squares = {current.squares}
          onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

/* Return history
<div className="game-history">
  <ol className="game-history-list">{moves}</ol>
</div>
*/

// ========================================
/* Render Game */
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// =========================================
/* Calculate Winner */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
