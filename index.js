export class Variable {

        constructor(value) {
                this.value = value
                this.subscribers = []
        }

        subscribe(callback) {
                this.subscribers.push(callback)
                callback(this.value)
        }

        set(value) {
                this.value = value
                this.subscribers.forEach(callback => callback(value))
        }
}


export default function(property, variable) {
  
        this.oninput = () => variable.set(this.value)
        variable.subscribe(value => this[property] = value)

        return this
}
