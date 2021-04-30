import React, { useState } from 'react';

function BusinessFinder(props) {
    const [count, setCount] = useState(0);

    return (
        <div class="flex-column">
            <div class="flex flex-1">
                <div class="flex-1 sidebar">
                    <p>Sidebar</p>
                </div>
                <div class="flex-4">
                    <p>Main Panel</p>
                </div>
            </div>
            <div class="flex footer"></div>
        </div>
        );
}

export default BusinessFinder;