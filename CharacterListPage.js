import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import './CharacterListPage.css';

const CharacterListPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(data => {
                const formattedCharacters = data.results.map((character, index) => ({
                    id: index + 1,
                    name: character.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }));
                setCharacters(formattedCharacters);
            });
    }, []);

    return (
        <div className="character-list-page-container">
            <h1 className="character-list-title">Lista de Personagens</h1>
            <div className="character-list-wrapper">
                <CharacterList characters={characters} />
            </div>
        </div>
    );
};

export default CharacterListPage;
