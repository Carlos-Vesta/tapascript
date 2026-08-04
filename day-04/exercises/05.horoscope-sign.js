
/*
    5. Horoscope Sign Checker

    Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) 
    based on a person’s birth month. Make it month bases, not date based. 
    Like March and April borns are Aries, Aplil and May born are Taurus, and so on. 
    Do not use if-else.


    * Zodiac Signs and Date Ranges
    
    - Aries: March 21 – April 19
    - Taurus: April 20 – May 20
    - Gemini: May 21 – June 21
    - Cancer: June 22 – July 22
    - Leo: July 23 – August 22
    - Virgo: August 23 – September 22
    - Libra: September 23 – October 23
    - Scorpio: October 24 – November 21
    - Sagittarius: November 22 – December 21
    - Capricorn: December 22 – January 19
    - Aquarius: January 20 – February 18
    - Pisces: February 19 – March 20
*/

let month = "December";
let message;

switch (month) {
    case "January":
        message = `Someone born in ${month} is either a Capricorn or an Aquarius.`;
        break;

    case "February":
        message = `Someone born in ${month} is either an Aquarius or a Pisces.`;
        break;

    case "March":
        message = `Someone born in ${month} is either a Pisces or an Aries.`;
        break;

    case "April":
        message = `Someone born in ${month} is either an Aries or a Taurus.`;
        break;

    case "May":
        message = `Someone born in ${month} is either a Taurus or a Gemini.`;
        break;

    case "June":
        message = `Someone born in ${month} is either a Gemini or a Cancer.`;
        break;
    
    case "July":
        message = `Someone born in ${month} is either a Cancer or a Leo.`;
        break;

    case "August":
        message = `Someone born in ${month} is either a Leo or a Virgo.`;
        break;

    case "September":
        message = `Someone born in ${month} is either a Virgo or a Libra.`;
        break;

    case "October":
        message = `Someone born in ${month} is either a Libra or a Scorpio.`;
        break;

    case "November":
        message = `Someone born in ${month} is either a Scorpio or a Sagittarius.`;
        break;

    case "December":
        message = `Someone born in ${month} is either a Sagittarius or a Capricorn.`;
        break;

    default:
        message = `"${month}" is NOT a real month.`;
}

console.log(message);