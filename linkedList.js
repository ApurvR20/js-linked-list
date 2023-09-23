const NodeFactory = (val = '', next = null) => ({val,next});

const LinkedList = (headVal = '') => {

    let headNode = NodeFactory(headVal);
    let nodes = 1;

    const head = () => headNode.val;
    
    const tail = () =>{
        let temp = headNode;
        while(temp.next)
        {
            temp = temp.next;
        }
        return temp.val;
    }

    const size = () => nodes;

    const append = (value) => {
        const newNode = NodeFactory(value);
        let temp = headNode;
        while(temp.next)
        {
            temp = temp.next;
        }
        temp.next = newNode;
        nodes++;
        console.log(value, 'appended');
    }

    const prepend = (value) => {
        const newNode = NodeFactory(value);
        newNode.next = headNode;
        headNode = newNode;
        nodes++;
        console.log(value, 'prepended');
    }

    const at = (index) => {
        let i = 0, temp = headNode;
        while(i < index)
        {
            if(!temp)
            return "Invalid Index";

            temp = temp.next;
            i++;
        }

        return temp.val;
    }

    const pop = () => {

        if(!headNode.next)
        {
            headNode = null;
            return;
        }

        let temp = headNode;
        while(temp.next && temp.next.next)
        {
            temp = temp.next;
        }
        temp.next = null;
        nodes--;
        console.log('popped');
    }

    const contains = (value) =>{
        let temp = headNode;

        while(temp)
        {
            if(temp.val == value)
            return true;
            temp = temp.next;
        }

        return false;
    }

    const find = (value) =>{
        let temp = headNode;
        let i = 0;
        while(temp)
        {
            if(temp.val == value)
            {
                return i;
            }
            temp = temp.next;
            i++;
        }
        return null;
    }

    const toString = () => {
        let str = "";
        temp = headNode;
        while(temp)
        {
            str+=temp.val;
            str+="->";
            temp = temp.next;
        }
        str+="null";
        return str;
    }

    return {headNode, head, tail, size, append, prepend, at, pop, contains, find, toString};
}

const newList = LinkedList(5);
console.log('head : ', newList.head());
console.log('tail : ', newList.tail());
newList.append(7);
newList.prepend(4);
console.log(newList.toString());
console.log('head : ', newList.head());
console.log('tail : ', newList.tail());
console.log(`size : ${newList.size()}`)
console.log(`at index 1 : ${newList.at(1)}`);
newList.pop();
console.log(`contains 5 : ${newList.contains(5)}\ncontains 7 : ${newList.contains(7)}`);
newList.append(8);
newList.append(12);
console.log(`find 8 : ${newList.find(8)} \nfind 13 : ${newList.find(13)}`);
console.log(`size : ${newList.size()}`);
console.log(newList.toString());