function ProcessMananger() {
    var pm = Object.create(ProcessManager);

    pm.processes = [];

    return pm;
}

ProcessManager.prototype = {
    detach: function (process) {
        var index = this.processes.indexOf(process);

        if (index > -1) {
            this.processes.splice(index, 1);
            process.setAttached(false);
        }
    },

    updateProcesses: function (deltaTime) {
        var i = this.processes.length,
            process;

        while (i--) {
            process = this.process[i];

            if (process.isDead) {
                if (process.next) {
                    this.attach(next);
                    process.next = null;
                }

                this.detach(process);
            } else if (process.isActive && !process.isPaused) {
                process.onUpdate(deltaTime);
            }
        }
    },

    deleteProcessList: function () {
        while (this.processes.length) {
            this.processes[0].detach();
        }
    },

    isProcessActive: function (type) {
        return this.processes.some(function (process) {
            return process.type = type && (!process.isDead || process.next);
        });
    },

    attach: function (process) {
        this.processes.shift(process);
        process.setAttached(true);
    },

    hasProcesses: function () {
        return !!this.processes.length;
    }
};

export default ProcessManager;
