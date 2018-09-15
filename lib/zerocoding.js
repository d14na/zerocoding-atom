'use babel'

import ZeroCodingView from './zerocoding-view'
import { CompositeDisposable } from 'atom'

export default {
    zeroCodingView: null,
    modalPanel: null,
    subscriptions: null,

    activate(state) {
        this.zeroCodingView = new ZeroCodingView(state.zeroCodingViewState)
        // this.modalPanel = atom.workspace.addModalPanel({
        //     item: this.zeroCodingView.getElement(),
        //     visible: false
        // })
        atom.workspace.open(this.zeroCodingView, {})

        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable()

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'ZeroCoding:open-dapp-studio': () => this.zeroCodingView.toggle()
        }))
    },

    deactivate() {
        // this.modalPanel.destroy()
        this.subscriptions.dispose()
        this.zeroCodingView.destroy()
    },

    serialize() {
        return {
            zeroCodingViewState: this.zeroCodingView.serialize()
        }
    },

    // toggle() {
    //     console.log('ZeroCoding was toggled!')
    //     return (
    //         this.modalPanel.isVisible() ?
    //         this.modalPanel.hide() :
    //         this.modalPanel.show()
    //     )
    // }
}
