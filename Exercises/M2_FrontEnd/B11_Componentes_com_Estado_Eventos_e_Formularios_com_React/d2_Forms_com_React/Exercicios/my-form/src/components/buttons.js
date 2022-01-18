import React from "react";

class Buttons extends React.Component {
  render() {
    const { save, clearAll } = this.props
    return (
      <div>
        <button onClick={ save }>Salvar</button>
        <button onClick={ clearAll }>Limpar</button>
          {/* <div>
            {stateData.allData.map((e, i) => (
              <li key={i}>{`${e[0]}: ${e[1]};`}</li>
            ))}
          </div> */}

      </div>
    )
  }
}

export default Buttons