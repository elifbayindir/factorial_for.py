// Implementation of Doubly Linked List 
// Alternative Solution for remove method

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val){ // adds a new node to the begnning
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    traverse(){ // prints all elements
        var current = this.head;  
        while(current){ 
            console.log(current.val); 
	    current = current.next; 
        }        
    }

    find(index){ // retrieves a node by it's position
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    remove(index){

        if (index > -1 && index < this.length){

            var current = this.head,
                i = 0;

            if (index === 0){ // removes a node from the beginning
                this.head = current.next;
                if (!this.head){
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }

            } else if (index === this.length -1){ // removes a node from the end 
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {

                while(i++ < index){
                    current = current.next;
                }

                current.prev.next = current.next;
            }

            this.length--;
            return current.data;            

        } else {
            return null;
        }

    }
}

var list = new DoublyLinkedList()

