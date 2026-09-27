import React from 'react';

// BEGIN (write your solution here)
    export default function getCard(args){
        const title = args['title'] ? <h4 className="card-title">{args['title']}</h4> : null
        const text = args['text'] ? <p className="card-text">{args['text']}</p> : null
        if (!args['title'] && !args['text']){
            return null
        }
         return (
            <div className="card">
              <div className="card-body">
                {title}
                {text}
              </div>
            </div>
        );
    }
   
// END
