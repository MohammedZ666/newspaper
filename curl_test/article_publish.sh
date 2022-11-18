#!/bin/bash
curl \
 -X "POST"\
 -d '{"email":"editor@news.com","password":"editor","title":"test-title","author":"test author","content":"test content"}'\
 -H "Content-Type:application/json"\
 http://localhost:3000/article/publish