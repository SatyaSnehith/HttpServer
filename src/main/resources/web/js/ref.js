class Ref {

    constructor(value) {
        this._value = value
        this.observers = []
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers.pop(observer)
    }

    set value(value) {
        this._value = value
        for (const observer of this.observers) {
            observer(value)
        }
    }

    get value() {
        return this._value
    }

    get observerCount() {
        return this.observers.length
    }
}

class RefArray {

    constructor(...values) {
        this._values = []
        for (const value of values)
            this._values.push(value)
        this.observers = []
    }


    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers.pop(observer)
    }

    callObservers(event, onFun) {
        for (const observer of this.observers) {
            const fun = observer[event]
            if (fun) {
                onFun(fun)
            }
        }
    }

    callAdd(value) {
        this.callObservers('onAdd', (fun) => fun(value))
    }

    callRemove(value, index) {
        this.callObservers('onRemove', (fun) => fun(value, index))
    }

    callInsert(value, index) {
        this.callObservers('onInsert', (fun) => fun(value, index))
    }

    callReplace(index, value) {
        this.callObservers('onReplace', (fun) => fun(index, value))
    }

    callUpdate() {
        this.callObservers('onUpdate', (fun) => fun(this._values))
    }

    replaceValue(index, value) {
        this._values.splice(index, 1, value);
        this.callReplace(index, value)
        this.callUpdate()
    }

    addValue(value) {
        this._values.push(value)
        this.callAdd(value)
        this.callUpdate()
    }

    removeValue(value, i) {
        const index = i || (this._values.length - 1)
        this._values.splice(index, 1)
        this.callRemove(value, index)
        this.callUpdate()
    }

    insertValue(value, index) {
        this._values.splice(index, 0, value);
        this.callInsert(value, index)
        this.callUpdate()
    }

    set values(values) {
        this._values = values
        this.callUpdate()
    }

    get values() {
        return this._values
    }

    get observerCount() {
        return this.observers.length
    }
}

class RefArrayObserver {
    onUpdate(values) {}
    onAdd(value) {}
    onRemove(value, index) {}
    onInsert(value, index) {}
    onAddAll(values) {}
    onRemoveAll(values) {}
}

class RefArrayObserverLogger extends RefArrayObserver {
    onUpdate(values) {
        console.log("onUpdate: " + values);
    }
    onAdd(value) {
        console.log("onAdd: " + value);
    }
    onRemove(value) {
        console.log("onRemove: " + value);
    }
    onAddAll(values) {
        console.log("onAddAll: " + values);
    }
    onRemoveAll(values) {
        console.log("onRemoveAll: " + values);
    }
}

const refArray = (...values) => new RefArray(...values)

const ref = (value) => new Ref(value)  

