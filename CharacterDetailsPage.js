import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetailsPage.css';

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data));
    }, [id]);

    if (!character) return <div>Loading...</div>;

    return (
        <div className="character-details-page-container">
            <h1 className="character-details-title">{character.name}</h1>
            <div className="character-details-card">
                <img src={character.sprites.front_default} alt={character.name} />
                <p>Height: {character.height}</p>
                <p>Weight: {character.weight}</p>
                <p>Base Experience: {character.base_experience}</p>
            </div>
        </div>
    );
};

export default CharacterDetailsPage;
