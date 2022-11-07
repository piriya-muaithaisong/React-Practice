import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'

class CardList extends Component {

    render () {
        var { monsters } = this.props;

        console.log(this.props)
        return (
            <div className='card-list'>
            {
                monsters.map((monster) => {
                    return (
                       <Card monster={monster}/>
                  );
                })
            }
            </div>
        );
    }
}

export default CardList;