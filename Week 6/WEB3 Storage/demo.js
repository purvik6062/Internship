import { Web3Storage } from 'https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js'
// import { Web3Storage } from 'web3.storage'
const form = document.querySelector('#upload-form')
const filepicker = document.querySelector('#filepicker')
const tokenInput = document.querySelector('#token')
const output = document.querySelector('#output')

showMessage('> ⁂ waiting for form submission...')

form.addEventListener('submit', async function (event) {
    // don't reload the page!
    event.preventDefault()

    showMessage('> 📦 creating web3.storage client')
    const token = tokenInput.value
    const client = new Web3Storage({ token })

    showMessage('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID')
    const files = filepicker.files
    const cid = await client.put(files, {
        onRootCidReady: (localCid) => {
            showMessage(`> 🔑 locally calculated Content ID: ${localCid} `)
            showMessage('> 📡 sending files to web3.storage ')
        },
        onStoredChunk: (bytes) => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
    })
    showMessage(`> ✅ web3.storage now hosting ${cid}`)
    showLink(`https://dweb.link/ipfs/${cid}`)
}, false)

function showMessage(text) {
    const node = document.createElement('div')
    node.innerText = text
    output.appendChild(node)
}

function showLink(url) {
    const node = document.createElement('a')
    node.href = url
    node.innerText = `> 🔗 ${url}`
    output.appendChild(node)
}

