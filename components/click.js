//'use client';

import { useState } from "react";

export default function Click() {
    const [count , setCount] = useState(0);

    return (
        <div>
            <div>There has been {count} love</div>
            <button onClick={() => setCount(count + 1)}>love</button>
        </div>
    )
}