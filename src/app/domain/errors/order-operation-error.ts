export class OrderOperationError extends Error{ //! IMPLEMENTS-> INJECT, EXTENDS --> INHERITANCE
    constructor(message: string){
        super(message)
        this.name = 'OrderOperationError'
    }
}