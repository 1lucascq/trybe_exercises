import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>Sobre a Pokedex:</h1>
        <p>
          The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia)
          is a digital encyclopedia created by Professor Oak as an invaluable
          tool to Trainers in the Pokémon world. It gives information about all
          Pokémon in the world that are contained in its database, although it
          differs in how it acquires and presents information over the different
          media. However, they are also only given to a few Trainers at a time,
          generally to the ones that are felt to have exceptional potential and
          skill. Regional Pokédexes give information about Pokémon native to a
          particular region, while the National Pokédex records information
          about all known Pokémon. Pokédex entries typically describe a Pokémon
          in only two or three sentences. They may give background information
          on the habitat or activities of a Pokémon in the wild or other
          information on the Pokémon's history or anatomy. Pokédex entries also
          include height, weight, cry, footprint (prior to Generation VI),
          location, other forms, and a picture of the Pokémon. Sometimes the
          Pokédex might contain inaccurate or mythical information. For example,
          some of Tentacruel's entries describes it as having 80 tentacles when
          only 14 are visible.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaeikbIooi1jJZbq8JZzDPVbssHAo6GK9FQ&usqp=CAU"
          alt="pokedex image"
        />
      </div>
    );
  }
}
