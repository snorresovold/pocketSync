import PocketBase from 'pocketbase';

interface pocketSync{
    in_email: string
    out_email: string
    in_pswd: string
    out_pswd: string
    in_url: string
    out_url: string
}
/**
 * This function will synchronise the schema of the "in" instance with the "out" instance
 * @param in_email, the email of the instance you are getting the schema from
 * @param out_email, the email of the instance you are outporting to
 * @param in_pswd, the password of the instance you are getting the schema from, MAKE SURE TO KEEP THIS SECRET
 * @param out_pswd, the password of the instance you are outporting to, MAKE SURE TO KEEP THIS SECRET
 * @param in_url, the url of the instance you are getting the schema from
 * @param out_url, the url of the instance you are outporting to
 */


async function schemaSync({in_email, out_email, in_pswd, out_pswd, in_url, out_url} :pocketSync) {
    const im = new PocketBase('https://scarce-salesmen.pockethost.io');
    await im.admins.authWithPassword('snorresovold@gmail.com', 'SuzukiFraSverige05!');
    let im_collections = await im.collections.getFullList();

    const out = new PocketBase('http://127.0.0.1:8090');
    await out.admins.authWithPassword('snorresovold@gmail.com', 'ToyotaFraBiltema05!');

    await out.collections.import(im_collections, true);
}

export default schemaSync;