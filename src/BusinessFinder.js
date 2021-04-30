import React, { useState } from 'react';

function BusinessFinder(props) {
    const [count, setCount] = useState(0);

    return (
        <div class="flex-column">
            <div class="flex-column">
                <div class="flex-1 sidebar"></div>
                <div class="flex-4"></div>
            </div>
            <div class="flex footer"></div>
        </div>
        );
}

export default BusinessFinder;