class AllegroController < ApplicationController
  require "uri"
  require "net/http"

  def index
  	uri = URI("https://allegro.pl/auth/oauth/token?grant_type=client_credentials") 
  	http = Net::HTTP.new(uri.host, uri.port)
  	http.use_ssl = true
    req = Net::HTTP::Post.new(uri.path, {'Authorization' => "Basic MGU5OWIwMGY5MDc1NDE4OTg4ZTgyOTM2YjE3ZmY5YmY6U2hzMnhVNW9tc1B6M2xmTEd0a2lxNHhta3ZqU2JTZmtCV1Nwd2NHVHh2UGF2Mmx6ZUFQQ1l4ZDZ1OXROdFVhZw=="})
    res = http.request(req)
    puts res
    puts req.inspect
  end
end