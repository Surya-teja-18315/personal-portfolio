// import React, { useState, useEffect } from 'react';
// import fetchMessage from "../utils/api";

// const MessageComponent = () => {
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         fetchMessage().then((data) => {
//             // Assuming the first item in the data array contains the text
//             if (data.length > 0) {
//                 setMessage(data[0].text);
//             }
//         });
//     }, []);

//     return (
//         <div>
//             <h1>Message from Backend:</h1>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default MessageComponent;
