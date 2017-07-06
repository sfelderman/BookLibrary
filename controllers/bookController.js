var Book     = require('../models/book');


module.exports = {
    getBook : function(req, res){
		Book.find(req.query, function(err, book) {
			if (err)
                res.send(err);

            return res.json(book);
		})

    },
    getBooks : function(req, res){
       Book.find(function(err, books) {
            if (err)
                res.send(err);

            return res.json(books);
        });
    },
    postBook : function(req, res){
        if (req.body._id) {
          Book.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, updatedBook) {
            if (err)
                console.log(err);
            return res.json(updatedBook);
          })
        } else {
           var book = new Book(req.body);      // create a new instance of the Book model
        
            book.save(function(err) {
                if (err)
                    return res.send(err);

                return res.json({ 
                    message: 'Book created!',
                    book: book
                 });
            }); 
        }
    },
	postBooks : function(req, res){
        Book.create(req.body, function(err, books) {
            if (err)   
                return res.send(err);

            return res.json(books);
        });
    }
}

