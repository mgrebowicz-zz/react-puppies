import * as usersService from '../../utilities/users-service';

import React from 'react';
import './PuppyIndexPage.css';
import PuppyListItem from '../../components/PuppyListItem/PuppyListItem';

function PuppyListPage(props) {
    return (
        <>
            <h1>Puppy Index</h1>
            {/* <div className='PuppyListPage-grid'>
                {props.puppies.map(puppy =>
                    <PuppyListItem
                        puppy={puppy}
                        key={puppy._id}
                        handleDeletePuppy={props.handleDeletePuppy}
                    />
                )}
            </div> */}
        </>
    );
}

export default PuppyListPage;