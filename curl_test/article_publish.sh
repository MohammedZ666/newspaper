curl \
 -X "POST"\
 -d '{"email":"editor@editor.com","password":"editor","title":"lipsum","author":"john doe","content":"lorem ipsum dolor sit amet"}'\
 -H "Content-Type:application/json"\
 http://localhost:3000/article/publish