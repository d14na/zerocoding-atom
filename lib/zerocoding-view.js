'use babel'

import moment from 'moment'

export default class ZeroCodingView {
    constructor(serializedState) {
        // Create root element
        this.element = document.createElement('div')
        this.element.classList.add('tool-panel', 'resizable-right-panel')
        this.element.tabIndex = -1

        /* Build content display. */
        const content = `
<style>
.container {
    width: 100%;
    padding: 15px;
}

h1 {
    color: rgb(225, 225, 255);
    font-family:sans-serif;
}

h3 {
    line-height: 20px;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid rgba(225, 225, 255, 0.3);
    opacity: 0.3;
    margin: 1em 0;
    padding: 0;
}
</style>

<div style="text-align:center;">
    <h1>DApp Center</h1>
    <h3>Let's start building something special for the decentralized web.</h3>
</div>

<hr>

<div style="font-family:monospace;">
    <h5>Get Started with these Useful DApps</h5>

    <ul>
        <li><a href="https://0net.io">Zer0net Main Gateway</a></li>
        <li><a href="https://0net.io/0coding.bit">Zer0Coding</a></li>
        <li><a href="https://0net.io/0issues.bit">Zer0Issues</a></li>
    </ul>
</div>
        `

        // Create message element
        const message = document.createElement('div')
        message.innerHTML = content
        message.classList.add('container')
        this.element.appendChild(message)

        this.visible = false
    }

    // Returns an object that can be retrieved when package is activated
    serialize() {
        lastExit: moment().unix()
    }

    // Tear down any state and detach
    destroy() {
      this.element.remove()
    }

    getElement() {
      return this.element
    }

    // The followings are the interface for the item in the pane.
    // See also: https://github.com/atom/atom/blob/995b0737abce58f9ec6a4cdee7503a12cbc4fa5b/src/workspace.js.
    getTitle() {
      console.log('ZeroCodingView.getTitle')
      return '0Coding'
    }

    getURI() {
      console.log('ZeroCodingView.getURI')
      return 'atom://0coding'
    }

    getAllowedLocations() {
      console.log('ZeroCodingView.getAllowedLocations')
      return ['right']
    }

    getPreferredLocation() {
      console.log('ZeroCodingView.getPreferredLocation')
      return 'right'
    }

    toggle() {
        console.log('ZeroCodingView.toggle', atom.workspace.itemOpened(this))

        this.visible = !this.visible

        if (this.visible) {
            this.element.style.display = null
        } else {
            this.element.style.display = 'none'
        }

        return atom.workspace.toggle(this)
    }

    isVisible() {
        return this.visible
    }
}
