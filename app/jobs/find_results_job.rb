class FindResultsJob < ApplicationJob
	queue_as :default

	def perform(barcode)
		uri = URI.parse("https://allegro.pl/auth/oauth/token?grant_type=client_credentials") 
		http = Net::HTTP.new(uri.host, uri.port)
		http.use_ssl = true
		req = Net::HTTP::Post.new(uri, {'Authorization' => "Basic MGU5OWIwMGY5MDc1NDE4OTg4ZTgyOTM2YjE3ZmY5YmY6U2hzMnhVNW9tc1B6M2xmTEd0a2lxNHhta3ZqU2JTZmtCV1Nwd2NHVHh2UGF2Mmx6ZUFQQ1l4ZDZ1OXROdFVhZw=="})
		res = http.request(req)
		result = JSON.parse(res.body) if res.code == "200"

		allegro = URI.parse("https://api.allegro.pl/offers/listing?phrase=#{barcode.code}&limit=10")
		http_allegro = Net::HTTP.new(allegro.host, allegro.port)
		http_allegro.use_ssl = true
		headers = {
			'Authorization' => "Bearer #{result['access_token']}",
			'Accept' => 'application/vnd.allegro.public.v1+json'
		}
		req_allegro = Net::HTTP::Get.new(allegro, headers)
		res_allegro = http_allegro.request(req_allegro)
		result_allegro = JSON.parse(res_allegro.body)
		puts res_allegro
		added = 0
		if result_allegro['items']['promoted'].count > 2
			result_allegro['items']['promoted'].each do |item|
				image = item['images'].first['url'] if item['images'].first['url']
				Result.create(
					name: item['name'], 
					image: image,
					price: item['delivery']['lowestPrice']['amount'],
					barcode: barcode
					)
				added += 1
			end
		elsif result_allegro['items']['regular'].count > 2
			result_allegro['items']['regular'].each do |item|
				result_allegro['items']['regular'].each do |item|
					image = item['images'].first['url'] if item['images'].first['url']
					Result.create(
						name: item['name'], 
						image: image,
						price: item['delivery']['lowestPrice']['amount'],
						barcode: barcode
						)
					added += 1
				end
			end 
		else 

		end

		# if added < 10
		# 	allegro_similar = URI.parse("https://api.allegro.pl/offers/listing?phrase=#{barcode.code}&limit=10&")
		# 	http_allegro_similar = Net::HTTP.new(allegro_similar.host, allegro_similar.port)
		# 	http_allegro_similar.use_ssl = true
		# 	headers = {
		# 		'Authorization' => "Bearer #{result['access_token']}",
		# 		'Accept' => 'application/vnd.allegro.public.v1+json'
		# 	}
		# 	req_allegro_similar = Net::HTTP::Get.new(allegro_similar, headers)
		# 	res_allegro_similar = http_allegro.request(req_allegro_similar)
		# 	result_allegro_similar = JSON.parse(res_allegro_similar.body)

		# 	if result_allegro['items']['promoted'].count > 2
		# 		result_allegro['items']['promoted'].each do |item|
		# 			image = item['images'].first['url'] if item['images'].first['url']
		# 			Result.create(
		# 				name: item['name'], 
		# 				image: image,
		# 				price: item['delivery']['lowestPrice']['amount'],
		# 				barcode: barcode
		# 			)
		# 		end
		# 	else
		# 		result_allegro['items']['regular'].each do |item|
		# 			result_allegro['items']['regular'].each do |item|
		# 				image = item['images'].first['url'] if item['images'].first['url']
		# 				Result.create(
		# 					name: item['name'], 
		# 					image: image,
		# 					price: item['delivery']['lowestPrice']['amount'],
		# 					barcode: barcode
		# 				)
		# 			end
		# 		end 
		# 	end
		# end
	end
end
