const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Lord Lui彼の;;;'
                    + 'FN:Lord Lui彼の\n' // full name
                    + 'item1.X-ABLabel:Mau masukin bot ke gc Lu chat Gw\n'
                    + 'URL;Web gwejh: doujindesu.xxx\n'
                    + 'EMAIL;Email Owner: njircoeg397@gmail.com\n'
                    + 'ORG:Lord Lui彼の;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282146092695:+6282146092695\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lord Lui彼の', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler




