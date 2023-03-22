import * as IPFS from 'ipfs-core'

async function main() {
  const node = await IPFS.create();

  const fileAdded = await node.add({
    path: "test.txt",
    content: "Hello IPFS!",
  });
  console.log(fileAdded.cid);
  console.log("Added file:", fileAdded.path, fileAdded.cid);

  const chunks = [];
  for await (const chunk of node.cat(fileAdded.cid)){
    chunks.push(chunk)
  }
  console.log("Retrieved file contents:", chunks.toString());
}

main();

