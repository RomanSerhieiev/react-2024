import React, { FC } from 'react';
import './App.css';
import { Character } from './components/character/Character';

const App: FC = () => {
    return (
        <div className="App">
            <Character name={"Bart Simpson"} image={"https://static.simpsonswiki.com/images/6/65/Bart_Simpson.png"}>
                Bartholomew JoJo "Bart" Simpson (born April 1 or February 23), A.K.A. El Barto and Bartman, is the mischievous, rebellious, misunderstood, and "potentially dangerous" eldest child of Homer and Marge Simpson, and the brother of Lisa and Maggie Simpson.
            </Character>
            <Character name={"Homer Simpson"} image={"https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png"}>
                Homer Jay Simpson, briefly legally changed his name to Max Power, is the father of the Simpson family. He is overweight, lazy, and ignorant, but also strongly devoted to his wife and children. He works as a low level safety inspector at the Springfield Nuclear Power Plant, in Sector 7G, although he's often incompetent, mostly sleeps on duty and eats the donuts provided. He spends a great deal of his time at Moe's Tavern with his lifelong friends Barney, Carl, Lenny, and bartender Moe Szyslak. At home he can often be found sitting on the sofa mindlessly watching TV while snacking on food and drinking Duff beer.
            </Character>
            <Character name={"Marge Simpson"} image={"https://static.simpsonswiki.com/images/thumb/0/0b/Marge_Simpson.png/250px-Marge_Simpson.png"}>
                Marjorie "Marge" B. Simpson, (née Bouvier; born March 19), is the happy homemaker and full-time mom of the Simpson family. With her husband Homer, she has three children: Bart, Lisa, and Maggie Simpson. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge flirted briefly with a number of careers ranging from police officer to anti-violence activist.
            </Character>
        </div>
    );
};

export {
    App
};
