curl \
 -X "POST"\
 --data '{"adminEmail":"admin@admin.com", "adminPassword":"admin", "email":"editor@editor.com", "password":"editor"}'\
 -H "Content-Type:application/json"\
 http://localhost:3000/editor/create