import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting, selectGreeting } from '../redux/greetingSlice';

const Greeting = () => {
    const greeting = useSelector(selectGreeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    return (
        <div>
            <p>Greeting Here:</p>
            <h2>{greeting}</h2>
        </div>
    );
};

export default Greeting;