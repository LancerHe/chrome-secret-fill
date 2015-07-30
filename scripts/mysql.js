var data = {
    appcoin: { host : '192.168.1.12', user : 'appcoin', pass : 'SD8kfcoF92LLMS4G'}
};

var host = data[database]['host'];
var user = data[database]['user'];
var pass = data[database]['pass'];

document.getElementById('input_username').value = user;
document.getElementById('input_password').value = pass;
document.getElementById('select_server').value = host;
