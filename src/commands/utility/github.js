const got = require('got');
 
exports.run = async (client, message, args) => {

    if (args.length < 1) return message.channel.send(`Anda harus memasukkan nama repository atau istilah pencarian!`);
        
    const input = args.join(' ');
 
    if (input.indexOf('/') !== -1) {
        let repo = safeRepo(input);
 
        message.edit(`:arrows_counterclockwise: Memuat info untuk '${repo}'...`);
 
        const res = await got(`https://api.github.com/repos/${repo}`, { json: true });
        const json = res.body;
        if (json.message === 'Not Found') {
            message.channel.send('Repositori itu tidak dapat ditemukan!');
        }
 
        message.edit({
            embed: {
            description: "'', getInfo(json)"
         }
        });
    } else {
        message.edit(`:arrows_counterclockwise: Mencari untuk '${input}'...`);
 
        const res = await got(`https://api.github.com/search/repositories?q=${args.join('+')}`, { json: true });
        const json = res.body;
        if (json.total_count < 1) {
            throw `No results found for '${args.join(' ')}'`;
        }
 
        message.delete();
        message.channel.send(':white_check_mark: 3 hasil teratas:');
 
        json.items.slice(0, 3).forEach(item => {
            message.channel.send({
                embed: {
               description: "'', getInfo(item)"
              } 
            });
        });
    }
};
 
function safeRepo(input) {
    if (input.indexOf('/') === -1) {
        return;
    }
 
    let user = input.substr(0, input.indexOf('/'));
    input = input.substr(input.indexOf('/') + 1);
    let repo = input.indexOf('/') === -1 ? input : input.substr(0, input.indexOf('/'));
    return `${user}/${repo}`;
}
 
function getInfo(json) {
    return `**${json.full_name}**
\t**Deskripsi:** _${json.description || 'Tidak ada yang disediakan'}_
\t**Pemilik:** [${json.owner.login}](${json.owner.html_url})
\t**Bahasa utama:** \`${json.language}\`
\t:house:  [Laman utama](${json.html_url})  :small_red_triangle_down:  [Muat turun](${json.html_url}/releases)  :exclamation:  [Masalah](${json.html_url}/issues)
\t:negative_squared_cross_mark:  \`${json.open_issues_count}\` masalah terbuka  :star:  \`${json.stargazers_count}\` bintang  :eyes:  \`${json.subscribers_count || json.watchers_count}\` dilihat
\tGunakan \`git clone ${json.clone_url}\` untuk mengkloning repositori ini
`;
}
