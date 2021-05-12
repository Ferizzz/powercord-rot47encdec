const {
    Plugin
} = require('powercord/entities');

module.exports = class ROT47 extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'encrot47',
            description: 'Zaszyfruj tekst szyfrem ROT47',
            usage: '{c} <text>',
            executor: (args) => ({
                send: false,
                username: "Feris Plugins.",
                avatar_url: "https://cdn.discordapp.com/avatars/769507561568337930/9543d915819b1c718475444a3166998c.png?size=128",
                result: rot47(args.join(' '))
            })
        });

        powercord.api.commands.registerCommand({
            command: 'sencrot47',
            description: 'Zaszyfruj tekst i wyślij.',
            usage: '{c} <text>',
            executor: (args) => ({
                send: true,
                result: rot47(args.join(' ')),
            })
        });

        powercord.api.commands.registerCommand({
            command: 'decrot47',
            description: 'Odszyfruj tekst zaszyfrowany szyfrem ROT47',
            usage: '{c} <ROT47 string>',
            executor: function (args) {
                let result;
                try {
                    result = rot47(args.join(' '));
                } catch {
                    result = 'Niepoprawna wartość';
                }

                return {
                    send: false,
                    username: "Feris Plugins.",
                    avatar_url: "https://cdn.discordapp.com/avatars/769507561568337930/9543d915819b1c718475444a3166998c.png?size=128",
                    result: result
                };
            }
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('encrot47');
        powercord.api.commands.unregisterCommand('sencr47');
        powercord.api.commands.unregisterCommand('decrot47');
    }
};

function rot47(x) {
    var s = [];
    for (var i = 0; i < x.length; i++) {
        var j = x.charCodeAt(i);
        if ((j >= 33) && (j <= 126)) {
            s[i] = String.fromCharCode(33 + ((j + 14) % 94));
        } else {
            s[i] = String.fromCharCode(j);
        }
    }
    return s.join('');
}