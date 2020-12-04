let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3050';
        break;

    case 'jjl-voyager-client.herokuapp.com':
        APIURL = 'https://jjl-voyager-server.herokuapp.com'
}

export default APIURL;
