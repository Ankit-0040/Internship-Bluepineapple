
function Book(book_name)
    {
        this.data = book_name;
        this.next = null;
    }

function Student(book_name)
    {
        this.data = book_name;
        this.next = null;
    }

function Book_List()
{
    let head = null;
    let first = null;


    function insert_Book(book_name){

        let new_node = new Book(book_name);
        if(head==null){
        head = new_node;
        }
        else{
        let tnode = head;
        while(tnode.next) {
            tnode = tnode.next;
        }
    
        tnode.next = new_node;
        }
       // console.log(new_node);
    }
    
    function searchBook(bookName){
            let tnode = head;
            //alert(tnode.data);
        while(tnode){
            if(tnode.data===bookName){
                return true;
            }
            tnode = tnode.next;
         }
         return false;

    }

    function del(bookname){
        let tnode = head;
        let t2node
        if(tnode.data===bookname) {
                head = tnode.next;
            } else {
                while(tnode.data!==bookname) {
                    t2node = tnode;
                    tnode = tnode.next;
                }
                t2node.next = tnode.next;
            }
    }

    function display()
    {
        var tnode = head;
        while (tnode)
        {
        alert(tnode.data);
        tnode = tnode.next;
        }
    }

    function issueBook(book_name)
    {
         let new_node = new Student(book_name);
            if(first==null) {
                first = new_node;
            } else {
                let tnode = first;
                while(tnode.next) {
                    tnode = tnode.next;
                }
                tnode.next = new_node;
            }
            //console.log(new_node);
    }

    function displayIssuedBook()
    {
        let tnode = first;
        while (tnode)
        {
        alert(tnode.data);
        tnode = tnode.next;
        }
    }



    do{
    var ch = Number(prompt("1.Insert book \n2.Display book\n3.Search book\n4.delete\n5.Issue book\n6.Display Issued Book\n7.exit\nEnter your choice "));


    switch(ch){
            case 1 : let bookname = prompt("Enter the book name ");
           
            insert_Book(bookname);
            alert("Book added successfully ")
            break;


            case 2 : display();
                        break;

            case 3 : let bookName=prompt("Enter the name of the book to be searched");
                        if(searchBook(bookName)){
                            alert('book is present')
                        }
                        else{
                            alert('book is not present')
                        }
                        break;
  
            case 4 : let bk_Name = prompt("enter the book name  to delete");
                    if(searchBook(bk_Name)){
                        del(bk_Name);
                        alert("Book deleted");
                    }
                    else{
                       alert("Book doesn't exist"); 
                        
                    }
                    break;

            case 5 : 
                    let bk_name = prompt("Enter the book to issue");
                    if(searchBook(bk_name)) {
                        del(bk_name);
                        issueBook(bk_name);
                        alert('Book issued successfully');
                    } else
                        alert('Book does not exist');
                    break;

            case 6:      displayIssuedBook();
                        break;
                        
            case 7 : exit();
                        break;           

            default :
            alert("Wrong choice!!!");
    
        }
    }while(ch!=8)
}
Book_List();
