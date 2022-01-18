import React from 'react';
import { connect } from 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    const { character, loading, error } = this.props;
    
    if (error) { return <div>{error}</div>; }
    
    const { name, gender, aliases, books } = character;
    
    if (!loading && character.aliases) {
      return (
        <ul>
          <li>Name: {name}</li>
          <li>Gender: {gender}</li>
          <li>Aliases: {aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = (state) => ({
  loading: state.infoReducer.isLoading,
  character: state.infoReducer.data,
  error: state.infoReducer.error
})

export default connect(mapStateToProps)(CharacterInfo)

//faça as propTypes
