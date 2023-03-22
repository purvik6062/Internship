// import {Web3Storage} from 'web3.storage';

// function getTokenAccess(){
//     return process.env.WEB3STORAGE_TOKEN
// }

// function makeStorageClient(){
//     return new Web3Storage({token: getTokenAccess()})
// }
const { Readable } = require('stream');
const { Web3Storage } = require('web3.storage');

async function uploadFile(file) {
  const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFBQzEwMTA5ZjdiYkMzZTE2NDhkQzQ0ZWZDMWIyNmE5NDM4NmNDNDciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NzEwNDgxMDQsIm5hbWUiOiJGaXJzdCBUb2tlbiJ9.DzaWMKEDN665VyENTUpqiZ4huwSTYmCJPMQVm2fufrg' });

  // Check if file has a stream method
  const stream = file.stream ? file.stream() : (file instanceof Buffer ? Readable.from([file]) : file);
  const cid = await client.put([file]);
  console.log(`File uploaded with CID: ${cid}`);
  return cid;
}

uploadFile('/IMG_20221003_192211_843.jpg');
