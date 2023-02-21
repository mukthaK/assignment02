let language = prompt(`Enter the Language code - es / de / en / fr`);
switch (language) {
    case 'es':
        console.log('Hello World translated in Spanish is: Hola Mundo');
        break;
    case 'de':
        console.log('Hello World translated in German is: Hallo Welt');
        break;
    case 'en':
        console.log('Hello World in English is: Hello World');
        break;
    case 'fr':
        console.log('Hello World translated in French is: Bonjour le monde');
        break;
    default:
        console.log('Hello World in English is: Hello World');
        break;
}