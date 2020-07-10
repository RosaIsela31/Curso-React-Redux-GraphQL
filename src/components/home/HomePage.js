import React from 'react';
import { connect } from 'react-redux';
import { removeCharacterAction } from '../../redux/charactersDuck';
import Card from '../card/Card';
import styles from './home.module.css';

function Home({ characters, removeCharacterAction }) {
    
    function renderCharacter() {
        let char = characters[0]
        return (<Card leftClick={nextCharacter} {...char} />)
    };

    function nextCharacter () {
         removeCharacterAction()
    };

    return (
        <div className={styles.container}>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderCharacter()}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        characters: state.characters.array
    }
}

export default connect(mapStateToProps, { removeCharacterAction })(Home)