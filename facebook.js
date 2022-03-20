const timer = ms => new Promise(res => setTimeout(res,ms))

let stuff = []

let next = () => document.querySelector('[aria-label="Next photo"]');
let image = () => document.querySelector('[data-visualcompletion="media-vc-image"]')

async function load () {
    while (next() != null) {
        stuff.push(image().src)
        next().click()
        console.log(stuff.length);
        await timer(3000);
    }
}

load()

// grab the images from stuff array
