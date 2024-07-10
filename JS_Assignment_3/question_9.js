// Q9) Write a function to count the number of words in a paragraph.

const paragraph = `O, what a world it is, where fleeting days pass swift as shadows o'er the sunlit glade. 
In this ephemeral realm, dost thou find solace in the sweet embrace of fleeting moments? 
Hark, the music of the spheres doth call to thee, urging thee to seize the joy of now, ere it slips away. 
For time, the relentless thief, robs us of our yesterdays and doth promise naught but memories for tomorrows. 
Thus, let us cherish each fleeting breath and dance with mirth beneath the heavens' gaze.
`;

function wordlen(paragraph){
const array = paragraph.trim().split(/\s+/);
    return array.length;
}

console.log("word count", wordlen(paragraph));
