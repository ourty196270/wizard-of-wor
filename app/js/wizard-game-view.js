function WizardGameView() {
    return Object.create(WizardGameView.prototype);
}

WizardGameView.prototype = {
    constructor: WizardGameView,

    render: function (elapsedTime, deltaTime) {
        console.warn('`WizardGameView.render` not implemented!');
    }
};

export default WizardGameView;
