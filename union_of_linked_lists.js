// Union of two sorted linked lists

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){ // adds a new node to the end of the linked list
        var newNode = new Node(val);  // creates a new data node to add to the linked-list
        if(!this.head){  // if there is no head
            this.head = newNode;
            this.tail = this.head; // head and tail are same
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }

 makeunion(list1, list2){ 

          if (list1 == null) // list1 is empty
          return list2; 
          if (list2 == null) // list2 is empty
          return list1;
 
  if (list1.val < list2.val) {
    this.head = list1; // head of the unified list to list1
  }
  else {
    this.head = list2; // head of the unified list to list2
    list2 = list1; // pointer to list2 now points to list1
    list1 = this.head; // pointer to list1 now points to list1
  }
  while(list1.next != null) { // lists are traversed and links from smallest to largest are established
    if (list1.val == list2.val) { // to handle same elements at the beginnig	
	list2 = list2.next; 	// list2 is sent to next
    }
    else if (list1.next.val == list2.val) { // handling same elements
      list1 = list1.next;
      list2 = list2.next;	
    }
    else if (list1.next.val > list2.val) { // pointers of list1 and list2 are interchanged so that the chain continues from where list2 points
      var tmp = list1.next;
      list1.next = list2;
      list2 = tmp;
      list1 = list1.next;
    }
    else { // moving on with list1
      list1 = list1.next;
    }
  } 

  list1.next = list2; // rest of the elements pointed to by list2 added
  return this; 

    }
    
}

var lst1 = new SinglyLinkedList()
lst1.push(3) 
lst1.push(5) 
lst1.push(7)

lst1.print()

var lst2 = new SinglyLinkedList()
lst2.push(6)
lst2.push(8) 
lst2.push(20)

lst2.print()

var unionlist = new SinglyLinkedList()
unionlist.makeunion(lst1.head, lst2.head)

/* Printed values:

> unionlist
SinglyLinkedList {
  head: Node { val: 3, next: Node { val: 5, next: [Node] } },
  tail: null,
  length: 0 }
> unionlist.next
undefined
> unionlist.head
Node {
  val: 3,
  next: Node { val: 5, next: Node { val: 6, next: [Node] } } }
> unionlist.head.next
Node {
  val: 5,
  next: Node { val: 6, next: Node { val: 7, next: [Node] } } }
> unionlist.head.next.next
Node {
  val: 6,
  next: Node { val: 7, next: Node { val: 8, next: [Node] } } }
> unionlist.head.next.next.next.next
Node { val: 8, next: Node { val: 20, next: null } }

*/



